import "./style.css";

function NoteList({ notes, onDelete }) {
  return (
    <div className="noteList">
      {notes.map((note) => (
        <p key={note.id}>
          {note.note}{" "}
          <button onClick={() => onDelete(note.id)} className="deleteBtn">
            删除
          </button>
        </p>
      ))}
    </div>
  );
}

export default NoteList;
