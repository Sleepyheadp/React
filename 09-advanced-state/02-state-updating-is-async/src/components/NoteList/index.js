import { useState } from "react";
import "./style.css";

function NoteList({ notes }) {
  return (
    <div className="noteList">
      {notes.map((note) => (
        <p key={note.id}>{note.note}</p>
      ))}
    </div>
  );
}

export default NoteList;
