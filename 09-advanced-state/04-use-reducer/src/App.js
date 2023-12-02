import { useReducer, useState } from "react";
import "./App.css";
import NoteCount from "./components/NoteCount";
import NoteList from "./components/NoteList";

let noteId = 0;

function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [
        ...notes,
        {
          id: action.id,
          note: action.note,
        },
      ];
    }
    case "delete": {
      return notes.filter((note) => note.id !== action.id);
    }
    default: {
      throw Error("没有此 action 类型");
    }
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [note, setNote] = useState("");

  function addNote() {
    dispatch({
      type: "add",
      id: noteId++,
      note,
    });
    setNote("");
  }

  function deleteNoteById(id) {
    dispatch({
      type: "delete",
      id,
    });
  }

  function handleNoteInput(e) {
    setNote(e.target.value);
  }

  return (
    <main className="container">
      <NoteList notes={notes} onDelete={deleteNoteById} />
      <input
        type="text"
        placeholder="输入笔记内容"
        value={note}
        onChange={handleNoteInput}
      />

      <button onClick={addNote}>添加笔记</button>
      <NoteCount count={notes.length} />
    </main>
  );
}

export default App;
