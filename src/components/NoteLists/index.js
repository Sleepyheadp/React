import React from "react";
import "./style.css";

function NoteList({ notes }) {
  return (
    <div className="noteList">
      {notes.length === 0 ?
        <div>暂无笔记数据</div>:
        notes.map((note) => (
        <div key={note.id} className="note">
          <h2>{note.title}</h2>
          <article>
            <p>{note.content}</p>
          </article>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
