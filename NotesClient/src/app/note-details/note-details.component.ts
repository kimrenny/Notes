import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailsFormComponent } from './note-details-form/note-details-form.component';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NoteState, NoteStateModel } from '../shared/note.state';
import { NoteDetail } from '../shared/note-detail.model';
import { LoadNotes, DeleteNote, SetFormData } from '../shared/note.actions';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [CommonModule, NoteDetailsFormComponent, TranslateModule],
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  notes$!: Observable<NoteDetail[]>;
  currentLang: string;

  constructor(
    private translate: TranslateService,
    public store: Store,
    private toastr: ToastrService
  ) {
    this.currentLang = this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  ngOnInit(): void {
    this.notes$ = this.store.select(NoteState.getNotes);
    this.store.dispatch(new LoadNotes());
  }

  populateForm(selectedRecord: NoteDetail) {
    this.store.dispatch(new SetFormData(selectedRecord));
  }

  onDelete(id: number) {
    const confirmMessage = this.translate.instant('CONFIRM.DELETE');
    if (confirm(confirmMessage))
      this.store.dispatch(new DeleteNote({ id })).subscribe({
        next: () => {
          this.store.dispatch(new LoadNotes());
          const message = this.translate.instant('TOASTR.SUCCESS.DELETE');
          const title = this.translate.instant('TOASTR.NOTE_DETAIL_REGISTER');
          this.toastr.success(message, title);
        },
        error: (err) => {
          console.log(err);
          const message = this.translate.instant('TOASTR.ERROR.DELETE');
          const title = this.translate.instant('TOASTR.NOTE_DETAIL_REGISTER');
          this.toastr.error(message, title);
        },
      });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }
}
