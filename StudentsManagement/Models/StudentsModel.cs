
using System.ComponentModel.DataAnnotations;

namespace StudentsManagement.Models
{
    public class StudentsModel
    {
        //Mapping
       /* public StudentsModel()
        {
            this.courses = new HashSet<CourseModule>();
        }*/

        [Key]
        public int id { get; set; }
        public int number { get; set; }
        public string? registerNo { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? email { get; set; }
        public string? dob { get; set; }
        public string? phone { get; set; }


        //Mapping
       // public virtual ICollection<CourseModule> courses { get; set; }
    }
}
