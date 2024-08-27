using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NotesAPI.Models;

namespace NotesAPI.Services;

public static class NotesService
{
    static List<NoteDetail> Notes { get; }
    static HashSet<int> availableIds = new HashSet<int>();
    static int nextId = 1; // Replace with 3 if lines below are uncommented
    static NotesService()
    {
        // Uncomment if needed to test with existing data

        Notes = new List<NoteDetail>();
        /*{
            new NoteDetail { Id = 1, NoteText = "Some text"},
            new NoteDetail { Id = 2, NoteText = "Hello world"}
        };
        */
    }

    public static List<NoteDetail> GetAll() => Notes;

    public static NoteDetail? Get(int id) => Notes.FirstOrDefault(x => x.Id == id);

    public static void Add(NoteDetail note)
    {
        if (availableIds.Count > 0)
        {
            note.Id = availableIds.Min();
            availableIds.Remove(note.Id);
        }
        else
        {
            note.Id = nextId++;
        }
        Notes.Add(note);
    }

    public static void Delete(int id)
    {
        var note = Get(id);
        if (note is null)
            return;

        Notes.Remove(note);
        availableIds.Add(id);
    }

    public static void Update(NoteDetail note)
    {
        var index = Notes.FindIndex(x => x.Id == note.Id);
        if (index == -1)
            return;

        Notes[index] = note;
    }
}