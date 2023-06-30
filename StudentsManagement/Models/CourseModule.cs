using System.ComponentModel.DataAnnotations;

namespace StudentsManagement.Models
{
    public class CourseModule
    {
     
        [Key]
        public int id { get; set; }
        public int? number { get; set; }
        public string? course { get; set; }
        public string? duration { get; set; }
        public string? fees { get; set; }
    }
}
