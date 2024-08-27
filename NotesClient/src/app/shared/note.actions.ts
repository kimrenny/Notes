import { NoteDetail } from './note-detail.model';

export class LoadNotes {
  static readonly type = '[Note] Load Notes';
}

export class AddNote {
  static readonly type = '[Note] Add Note';
  constructor(public payload: { note: NoteDetail }) {}
}

export class UpdateNote {
  static readonly type = '[Note] Update Note';
  constructor(public payload: { id: number; note: NoteDetail }) {}
}

export class DeleteNote {
  static readonly type = '[Note] Delete Note';
  constructor(public payload: { id: number }) {}
}

export class SetFormData {
  static readonly type = '[Note] Set Form Data';
  constructor(public payload: NoteDetail) {}
}
