import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "./App";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  return note == null ? <Navigate to="/" replace /> : <Outlet context={note} />;
}

export function useNote() {
  return useOutletContext<Note>();
}
