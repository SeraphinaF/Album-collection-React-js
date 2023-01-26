import React,{ useEffect, useState } from "react";
import { Note } from "./Note";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes";

export function App() {
  const [notes, setNotes] = useState([]);

  const showNotes = notes.map((value, key) =>
    <Note key={value.id} note={value} />)

  const loadNotes = () => {
    fetch(URI_COLLECTION, {

      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => setNotes(result.items))


  }

  useEffect(loadNotes, [])

  return <div><h1 className="title">Mijn Notities</h1>
    {showNotes}
  </div>
}