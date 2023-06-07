using ATM_project.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data.SqlClient;

namespace ATM_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ATMController : ControllerBase
    {
        // GET: api/<ATMController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new string[] { "value1", "value2" });
        }

        // GET api/<ATMController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok("value");
        }

        [HttpPost("signup")]
        public IActionResult SignUppost([FromBody] SignUp signup)
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
                        command.Parameters.AddWithValue("@ID", signup.Id);
                        command.Parameters.AddWithValue("@Pin", signup.Pin);
                        command.ExecuteNonQuery();
                    }
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("withdrawal")]
        public IActionResult Withdrawalpost([FromBody] Withdrawal withdrawal)
        {
            if (withdrawal == null)
            {
                return BadRequest();
            }

            string connectionString = @"Data Source=DESKTOP-PERSV88;Initial Catalog=atmproject;Integrated Security=True";
            string query = "INSERT INTO withdrawal (WithdrawalAmount) VALUES (@withdrawalAmount)";

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@WithdrawalAmount", withdrawal.withdrawalAmount);
                        command.ExecuteNonQuery();
                    }
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
