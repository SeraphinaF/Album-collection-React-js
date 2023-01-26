import React from "react";

export function Note(props) {
    console.log(props);

    const deleteNote = () => {
        fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${props.note.id}`, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.notesRefreshHandler())
    }

    const createNote = () => {
          
    }


    return <section>
        <div>
            <h2>{props.note.title}</h2>
            <button className="btn btn-danger" onClick={deleteNote}> Verwijderen</button>
            <button className="btn btn-primary" onClick={deleteNote}> Details</button>
        </div>
    </section>
}

export default Note;