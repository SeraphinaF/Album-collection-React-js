import React from "react";
import { useState } from "react";

export function NewNote(props) {
    console.log(props);

    const [note, setNote] = useState({
        title: "",
        body: "",
        author: ""
    })

    const createNote = (event) => {
        // event.prevent.Default()

        fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(note)
        })
            .then((response) => props.notesRefreshHandler())
    }

    const onChangeHandler = (event) => {
        setNote({

            ...note,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <div>
            <h2>Nieuwe Notitie</h2>
            <form>
                    <input type="text" value={note.title} name="title" onChange={onChangeHandler} /><br />
                    <input type="text" value={note.body} name="body" onChange={onChangeHandler} /><br />
                    <input type="text" value={note.author} name="author" onChange={onChangeHandler} /><br />
                    <button onClick={createNote} className="btn btn-success" type="submit">Opslaan</button>
            </form>
        </div>
    </section>
}

export default NewNote;