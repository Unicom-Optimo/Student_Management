using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentsManagement.Models;

namespace StudentsManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseModulesController : ControllerBase
    {
        private readonly StudentDbContext _context;

        public CourseModulesController(StudentDbContext context)
        {
            _context = context;
        }

        // GET: api/CourseModules
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseModule>>> GetcourseModules()
        {
          if (_context.courseModules == null)
          {
              return NotFound();
          }
            return await _context.courseModules.ToListAsync();
        }

        // GET: api/CourseModules/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseModule>> GetCourseModule(int id)
        {
          if (_context.courseModules == null)
          {
              return NotFound();
          }
            var courseModule = await _context.courseModules.FindAsync(id);

            if (courseModule == null)
            {
                return NotFound();
            }

            return courseModule;
        }

        // PUT: api/CourseModules/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseModule(int id, CourseModule courseModule)
        {
            if (id != courseModule.id)
            {
                return BadRequest();
            }

            _context.Entry(courseModule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseModuleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CourseModules
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CourseModule>> PostCourseModule(CourseModule courseModule)
        {
          if (_context.courseModules == null)
          {
              return Problem("Entity set 'StudentDbContext.courseModules'  is null.");
          }
            _context.courseModules.Add(courseModule);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseModule", new { id = courseModule.id }, courseModule);
        }

        // DELETE: api/CourseModules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseModule(int id)
        {
            if (_context.courseModules == null)
            {
                return NotFound();
            }
            var courseModule = await _context.courseModules.FindAsync(id);
            if (courseModule == null)
            {
                return NotFound();
            }

            _context.courseModules.Remove(courseModule);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseModuleExists(int id)
        {
            return (_context.courseModules?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
