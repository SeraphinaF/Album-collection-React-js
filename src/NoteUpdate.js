import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes";

export function NoteUpdate() {
  const { id } = useParams();
  const [note, setNote] = useState({
    title: "",
    body: "",
    author: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URI_COLLECTION}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setNote(result))
      .catch((error) => console.log("ERROR:" + error));
  }, [id]);

  const updateNote = (event) => {
    event.preventDefault();

    fetch(`${URI_COLLECTION}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
    .then(() => {
        // Navigate to home page
        navigate("/");
        // Refresh page
        window.location.reload();
    })
      .catch((error) => console.log("ERROR:" + error));
  };

  const onChangeHandler = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <div>
        <h2>Bewerk Notitie</h2>
        <form className="form-control" onSubmit={updateNote}>
          <h4>Note:{id}</h4>
          <input
            type="text"
            value={note.title}
            name="title"
            onChange={onChangeHandler}
          />
          <br />
          <input
            type="text"
            value={note.body}
            name="body"
            onChange={onChangeHandler}
          />
          <br />
          <input
            type="text"
            value={note.author}
            name="author"
            onChange={onChangeHandler}
          />
          <br />
          <button className="btn btn-success" type="submit">
            Opslaan
          </button>
        </form>
      </div>
    </section>
  );
}