import React from "react";

export function Note(props) {
    console.log(props);

    const updateNote = () => {
        const { title, body, author } = props.note;
        fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${props.note.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title,
              body,
              author,
            }),
        })
        .then((response) => {
            if(response.ok) {
                props.notesRefreshHandler();
            }
        })
    }

    const deleteNote = () => {
        fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${props.note.id}`, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.notesRefreshHandler())
    }

    const detailsNote = () => {
          
    }


    return <section>
        <div>
            <h2>{props.note.title}</h2>
            <button className="btn btn-danger" onClick={deleteNote}> Verwijderen</button>
            <button className="btn btn-primary" onClick={detailsNote}> Details</button>
        </div>
    </section>
}

export default Note;