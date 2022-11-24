import { NoteData } from "./App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

export default function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <div>
      <h1 className="mb-4">New Note</h1>
    </div>
  );
}
