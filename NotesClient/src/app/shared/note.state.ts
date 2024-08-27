import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NoteDetailService } from './note-detail.service';
import { NoteDetail } from './note-detail.model';
import { tap } from 'rxjs/operators';
import {
  LoadNotes,
  AddNote,
  UpdateNote,
  DeleteNote,
  SetFormData,
} from './note.actions';

export interface NoteStateModel {
  notes: NoteDetail[];
  formData: NoteDetail;
}

@State<NoteStateModel>({
  name: 'note',
  defaults: {
    notes: [],
    formData: new NoteDetail(),
  },
})
@Injectable()
export class NoteState {
  constructor(private noteService: NoteDetailService) {}

  @Selector()
  static getNotes(state: NoteStateModel) {
    return state.notes.slice().sort((a, b) => a.id - b.id);
  }

  @Selector()
  static getFormData(state: NoteStateModel) {
    return state.formData;
  }

  @Action(LoadNotes)
  loadNotes(ctx: StateContext<NoteStateModel>) {
    return this.noteService.refreshList().pipe(
      tap((notes) => {
        ctx.patchState({ notes });
      })
    );
  }

  @Action(AddNote)
  addNote(ctx: StateContext<NoteStateModel>, action: AddNote) {
    return this.noteService.postNoteDetail(action.payload.note).pipe(
      tap((note: NoteDetail) => {
        const state = ctx.getState();
        ctx.patchState({
          notes: [...state.notes, note],
        });

        ctx.dispatch(new LoadNotes());
      })
    );
  }

  @Action(UpdateNote)
  updateNote(ctx: StateContext<NoteStateModel>, action: UpdateNote) {
    return this.noteService
      .putNoteDetail(action.payload.id, action.payload.note)
      .pipe(
        tap((updatedNote: NoteDetail) => {
          const state = ctx.getState();
          const notes = state.notes.map((note) =>
            note.id === updatedNote.id ? updatedNote : note
          );
          ctx.patchState({ notes });
        })
      );
  }

  @Action(DeleteNote)
  deleteNote(ctx: StateContext<NoteStateModel>, action: DeleteNote) {
    return this.noteService.deleteNoteDetail(action.payload.id).pipe(
      tap(() => {
        const state = ctx.getState();
        const filteredArray = state.notes.filter(
          (note) => note.id !== action.payload.id
        );
        ctx.patchState({ notes: filteredArray });
      })
    );
  }

  @Action(SetFormData)
  setFormData(ctx: StateContext<NoteStateModel>, action: SetFormData) {
    ctx.patchState({
      formData: action.payload,
    });
  }
}
