import React, { useEffect, useState } from "react";
import { Note } from "./Note";
import { NewNote } from "./NewNote";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Layout } from "react";


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
  }

  const showNotes = notes.map((value, key) =>
    <Note key={value.id} note={value} notesRefreshHandler={loadNotes} />)

  useEffect(loadNotes, [])

//   return <div>
//     <Note notes={} notesRefreshHandler={()=> loadNotes()} />
//   </div>
// }

  // return <BrowserRouter>
  //         <Routes>
  //             <Route path="/" element={<Layout />}>
  //                 <Route index element={<Note key={value.id} note={value} notesRefreshHandler={loadNotes} /> }/>
  //             </Route>
  //             {showNotes}
  //           <NewNote notesRefreshHandler={loadNotes} />
  //         </Routes>
  // </BrowserRouter>

 

  return <div>
    {/* <NewNote notesRefreshHandler={loadNotes} /> */}
    {showNotes}
  </div>
}