using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Models
{
    public class NoteDetail
    {
        public int Id { get; set; }

        public string? NoteText { get; set; } = string.Empty;
    }
}
