import React from "react";

export function Note(props){
    console.log(props);


    


return <section>
    <h2>{props.note.title}</h2>
    <button  className="btn btn-danger" on Click={() => props.handleDelete(props.note.id)}>Verwijder</button>
</section>
}