import React, { useEffect, useState } from "react";
import { Note } from "./Note";
import { NewNote } from "./NewNote";
import {NoteDetails} from "./NoteDetails";
import { NoteUpdate } from "./NoteUpdate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout} from "./Layout";
// // import { Routes } from "react-router-dom";
// // import { Layout } from "react";


const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes";

export function App() {
  const [notes, setNotes] = useState([]);

  const loadNotes = () => {
    fetch(URI_COLLECTION, {

      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => setNotes(result.items))
      .catch(error => console.log("ERROR:" + error))
  }

  const showNotes = notes.map((value, key) =>
    <Note key={value.id} note={value} notesRefreshHandler={loadNotes} />)

  useEffect(loadNotes, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route  path="/" index element= {<div>{showNotes}</div>}/>
          <Route  path="create" element={<NewNote notesRefreshHandler={loadNotes}/>} />
          <Route path="notes/:id" element={<NoteDetails />}/>
          <Route path="edit/:id" element={<NoteUpdate />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}