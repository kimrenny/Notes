import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteDetailsComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NotesApp';

  constructor(private http: HttpClient) {}
}
