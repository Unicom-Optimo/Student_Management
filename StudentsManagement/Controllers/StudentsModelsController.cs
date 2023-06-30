using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using StudentsManagement.Models;

namespace StudentsManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsModelsController : ControllerBase
    {
        private readonly StudentDbContext _context;

        public StudentsModelsController(StudentDbContext context)
        {
            _context = context;
        }

        // GET: api/StudentsModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentsModel>>> GetstudentModel()
        {
          if (_context.studentModel == null)
          {
              return NotFound();
          }
            return await _context.studentModel.ToListAsync();
        }

        // GET: api/StudentsModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentsModel>> GetStudentsModel(int id)
        {
          if (_context.studentModel == null)
          {
              return NotFound();
          }
            var studentsModel = await _context.studentModel.FindAsync(id);

            if (studentsModel == null)
            {
                return NotFound();
            }

            return studentsModel;
        }

        // PUT: api/StudentsModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentsModel(int id, StudentsModel studentsModel)
        {
            if (id != studentsModel.id)
            {
                return BadRequest();
            }

            _context.Entry(studentsModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentsModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return Ok(new
            {
                StatusCode = 200,
                Message = "Student details updated"
            });
        }

        // POST: api/StudentsModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentsModel>> PostStudentsModel(StudentsModel studentsModel)
        {
          if (_context.studentModel == null)
          {
              return Problem("Entity set 'StudentDbContext.studentModel'  is null.");
          }
            _context.studentModel.Add(studentsModel);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetStudentsModel", new { id = studentsModel.id }, studentsModel);
            return Ok(new
            {
                StatusCode = 200,
                Message = "Student details successfuly added"
            });
        }

        // DELETE: api/StudentsModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentsModel(int id)
        {
            if (_context.studentModel == null)
            {
                return NotFound();
            }
            var studentsModel = await _context.studentModel.FindAsync(id);
            if (studentsModel == null)
            {
                return NotFound();
            }

            _context.studentModel.Remove(studentsModel);
            await _context.SaveChangesAsync();

            //return NoContent();
            return Ok(new
            {
                StatusCode = 200,
                Message = "Student detail deleted"
            });
        }

        private bool StudentsModelExists(int id)
        {
            return (_context.studentModel?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
