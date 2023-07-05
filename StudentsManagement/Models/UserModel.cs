using System.ComponentModel.DataAnnotations;

namespace StudentsManagement.Models
{
    public class UserModel
    {
        [Key]
        public int id { get; set; }
        public String? fullName { get; set; }
        public String? userName { get; set; }
        public String? password { get; set; }
        public String? mobile { get; set; }
        public String? userType { get; set; }
        public string? Token { get; set; }
        public String  email { get; set; }
    }
}
