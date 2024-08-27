import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { NoteDetail } from './note-detail.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteDetailService {
  url: string = environment.apiBaseUrl + '/notes';
  formData: NoteDetail = new NoteDetail();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  refreshList(): Observable<NoteDetail[]> {
    return this.http.get<NoteDetail[]>(this.url);
  }

  postNoteDetail(note: NoteDetail): Observable<NoteDetail> {
    return this.http.post<NoteDetail>(this.url, note);
  }

  putNoteDetail(id: number, note: NoteDetail): Observable<NoteDetail> {
    return this.http.put<NoteDetail>(`${this.url}/${id}`, note);
  }

  deleteNoteDetail(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new NoteDetail();
    this.formSubmitted = false;
  }
}
