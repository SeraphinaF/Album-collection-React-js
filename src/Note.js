import React from "react";
import { Link, useParams } from "react-router-dom";

export function Note(props) {
    

    const params = useParams()

    const deleteNote = () => {
        fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${props.note.id}`, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.notesRefreshHandler())
    }

    return <section>
        <div>
            <h2>{props.note.title}</h2>
            <button className="btn btn-danger" onClick={deleteNote}>Delete</button>
            <button className="btn btn-success"><Link to={"notes/"+ props.note.id}>Details</Link></button>
            <button className="btn btn-primary"><Link to={"edit/" + props.note.id}>Update</Link></button>
        </div>
    </section>
}

export default Note;