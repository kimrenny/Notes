using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using NotesAPI.Services;

namespace NotesAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class notesController: ControllerBase
{
    public notesController()
    {
    }

    // GET /notes
    [HttpGet]
    public ActionResult<List<NoteDetail>> GetAll() =>
        NotesService.GetAll();

    // GET /notes/{id}
    [HttpGet("{id}")]
    public ActionResult<NoteDetail> Get(int id)
    {
        var note = NotesService.Get(id);

        if (note is null)
            return NotFound();

        return Ok(note);
    }

    // POST /notes
    [HttpPost]
    public IActionResult Create(NoteDetail note)
    {
        NotesService.Add(note);
        return Ok(note);
    }

    // PUT /notes/{id}
    [HttpPut("{id}")]
    public IActionResult Update(int id, NoteDetail note)
    {
        if (id != note.Id)
            return BadRequest();

        var existingNote = NotesService.Get(id);
        if (existingNote is null)
            return NotFound();

        NotesService.Update(note);
        return NoContent();
    }

    // DELETE /notes/{id}
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var note = NotesService.Get(id);
        if (note is null)
            return NotFound();

        NotesService.Delete(id);
        return NoContent();
    }
}