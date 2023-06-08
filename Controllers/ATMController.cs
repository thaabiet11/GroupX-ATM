using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ATM_API;
using Group_X_ATM.Models;
using System.Net.NetworkInformation;

namespace ATM_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ATMController : ControllerBase
    {
        [HttpGet("balance")]
        public IActionResult GetBalance()
        {
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "SELECT Balance FROM transactions ";

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        decimal balance = (decimal)command.ExecuteScalar();
                        return Ok(balance);
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public ActionResult<IEnumerable<SignUp>> Get(int id)
        {
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "SELECT * FROM login WHERE Pin = @id";
            List<SignUp> adduser = new List<SignUp>();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@id", id);
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SignUp user = new SignUp();
                                user.Pin = reader.GetInt32(0);
                                adduser.Add(user);
                            }
                        }
                    }
                }
                return Ok(adduser);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }


        [HttpPost("signup")]
        public IActionResult Post([FromBody] SignUp signup)
        {
            if (signup == null)
            {
                return BadRequest();
            }
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "INSERT INTO signup (FirstName, LastName, Age, ID, Pin) VALUES (@FirstName, @LastName, @Age, @ID, @Pin)";
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@FirstName", signup.FirstName);
                        command.Parameters.AddWithValue("@LastName", signup.LastName);
                        command.Parameters.AddWithValue("@Age", signup.Age);
                        command.Parameters.AddWithValue("@ID", signup.ID);
                        command.Parameters.AddWithValue("@Pin", signup.Pin);
                        command.ExecuteNonQuery();
                        return Ok();
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{id}")]
        public IActionResult ChangePinPut(int id, [FromBody] SignUp signUp)
        {
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string updateSql = "UPDATE signup SET Pin = @NewPin WHERE Pin = @Pin";

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(updateSql, connection))
                    {
                        command.Parameters.AddWithValue("@NewPin", signUp.Pin);
                        command.Parameters.AddWithValue("@Pin", id);
                        int rowsAffected = command.ExecuteNonQuery();
                        return Ok($"{rowsAffected} rows updated.");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("transactions/withdrawal")]
        public IActionResult WithdrawalPost([FromBody] Transactions transactions)
        {
            if (transactions == null)
            {
                return BadRequest();
            }
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "INSERT INTO transactions (Deposit, Withdrawal, Balance) VALUES (@Deposit, @Withdrawal, @Balance)";
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@Deposit", transactions.Deposit);
                        command.Parameters.AddWithValue("@Withdrawal", transactions.Withdrawal);
                        command.Parameters.AddWithValue("@Balance", transactions.Balance);
                        command.ExecuteNonQuery();
                        return Ok();
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("transactions")]
        public IActionResult DepositPost([FromBody] Transactions transactions)
        {
            if (transactions == null)
            {
                return BadRequest();
            }
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "INSERT INTO transactions (Deposit, Withdrawal, Balance) VALUES (@Deposit, @Withdrawal, @Balance)";
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@Deposit", transactions.Deposit);
                        command.Parameters.AddWithValue("@Withdrawal", transactions.Withdrawal);
                        command.Parameters.AddWithValue("@Balance", transactions.Balance);
                        command.ExecuteNonQuery();
                        return Ok();
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost("transactions/deposit")]
        public IActionResult MakeDeposit([FromBody] Transactions transactions)
        {
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string updateBalanceSql = "UPDATE transactions SET Balance = Balance + @Deposit";
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(updateBalanceSql, connection))
                    {
                        command.Parameters.AddWithValue("@Deposit", transactions.Deposit);
                        command.ExecuteNonQuery();
                    }
                }

                return Ok("Deposit processed successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("transactions/withdrawal")]
        public IActionResult MakeWithdrawal([FromBody] Transactions transactions)
        {
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string updateBalanceSql = "UPDATE transactions SET Balance = Balance - @Withdrawal";
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(updateBalanceSql, connection))
                    {
                        command.Parameters.AddWithValue("@Withdrawal", transactions.Withdrawal);
                        command.ExecuteNonQuery();
                    }
                }

                return Ok("Withdrawal processed successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("transactions/withdrawal")]
        public IActionResult GetWithdrawal()
        {
            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "SELECT Withdrawal FROM transactions ORDER BY TransactionId DESC LIMIT 1";

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        double withdrawalAmount = (double)command.ExecuteScalar();
                        return Ok(withdrawalAmount);
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
