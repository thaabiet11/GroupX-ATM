namespace ATM_project.Models
{
    public class SignUp
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Id { get; set; }

        public int Pin { get; set; }
    }
    public class Withdrawal
    {
        public double withdrawalAmount { get; set; }
    } 
     
         public class ChangePinRequest
    {
        public string CurrentPin { get; set; }
        public string NewPin { get; set; }
        public string ConfirmPin { get; set; }
    }
}
