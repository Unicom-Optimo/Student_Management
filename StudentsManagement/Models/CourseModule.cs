using System.ComponentModel.DataAnnotations;

namespace StudentsManagement.Models
{
    public class CourseModule
    {

        //Mapping
        /*public CourseModule()
        {
            this.Students = new HashSet<StudentsModel>();
        }*/


        [Key]
        public int id { get; set; }
        public int? number { get; set; }
        public string? course { get; set; }
        public string? duration { get; set; }
        public string? fees { get; set; }

        //Mapping
        //public virtual ICollection<StudentsModel> Students { get; set; }
    }
}
