import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  AddNote,
  LoadNotes,
  SetFormData,
  UpdateNote,
} from '../../shared/note.actions';
import { NoteDetailService } from '../../shared/note-detail.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NoteDetail } from '../../shared/note-detail.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { NoteState } from '../../shared/note.state';

@Component({
  selector: 'app-note-details-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './note-details-form.component.html',
})
export class NoteDetailsFormComponent implements OnInit {
  formData: NoteDetail = new NoteDetail();
  formSubmitted = false;

  constructor(
    public store: Store,
    private toastr: ToastrService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.store.select(NoteState.getFormData).subscribe((data) => {
      if (data) this.formData = { ...data };
      else this.formData = new NoteDetail();
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.formData = new NoteDetail();
    this.store.dispatch(new SetFormData(new NoteDetail()));
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      if (this.formData.id == 0) this.insertRecord(form);
      else this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.store.dispatch(new AddNote({ note: this.formData })).subscribe({
      next: () => {
        this.resetForm(form);
        this.store.dispatch(new LoadNotes());
        const message = this.translate.instant('TOASTR.SUCCESS.INSERT');
        const title = this.translate.instant('TOASTR.NOTE_DETAIL_REGISTER');
        this.toastr.success(message, title);
      },
      error: (err) => {
        console.log(err);
        const message = this.translate.instant('TOASTR.ERROR.INSERT');
        const title = this.translate.instant('TOASTR.NOTE_DETAIL_REGISTER');
        this.toastr.error(message, title);
      },
    });
  }

  updateRecord(form: NgForm) {
    if (this.formData && this.formData.id) {
      this.store
        .dispatch(
          new UpdateNote({
            id: this.formData.id,
            note: this.formData,
          })
        )
        .subscribe({
          next: () => {
            this.store.dispatch(new LoadNotes()).subscribe({
              next: () => {
                this.resetForm(form);
                const message = this.translate.instant('TOASTR.SUCCESS.UPDATE');
                const title = this.translate.instant(
                  'TOASTR.NOTE_DETAIL_REGISTER'
                );
                this.toastr.info(message, title);
              },
              error: (err) => {
                console.error('Error loading notes after update:', err);
              },
            });
          },
          error: (err) => {
            console.log('Error during update:', err);
            const message = this.translate.instant('TOASTR.ERROR.UPDATE');
            const title = this.translate.instant('TOASTR.NOTE_DETAIL_REGISTER');
            this.toastr.error(message, title);
          },
        });
    } else console.error('Invalid formData for update:', this.formData);
  }
}
