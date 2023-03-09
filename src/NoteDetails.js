import React from "react";
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";


const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes";

export function NoteDetails() {
    const params = useParams()

    const [note, setNote]= useState(null)

    const loadNote = () => {
        fetch(URI_COLLECTION + "/" + params.id, {
    
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
          mode: 'cors'
        })
          .then((response) => response.json())
          .then((result) => setNote(result))
          .catch(error => console.log("ERROR:" + error))
      }
    
      useEffect(loadNote, [])
    

    return <section>
        <h1>Note:{params.id}</h1>
        <h3>{note && note.title}</h3>
        <h3>{note && note.body}</h3>
        <h3>{note && note.author}</h3>
        <button className="btn btn-primary"><Link to="/notes/:id/edit">Update</Link></button>
    </section>
}