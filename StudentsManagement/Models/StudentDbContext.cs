using Microsoft.EntityFrameworkCore;

namespace StudentsManagement.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) { }

        public DbSet<StudentsModel> studentModel { get; set; }
        public DbSet<CourseModule> courseModules { get; set; }
        public DbSet<UserModel> userModels { get; set; }
    }
}
