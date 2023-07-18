import React, {useState} from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpended, setIsExpended] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name,value} = event.target;
        
        setNote(prevNote => {
            return {            // returning the object
                ...prevNote,    //this srpead operator helps to spread over the all the current value of note basically it helps to add the previous value
                [name]: value   // [name] this syntax turns the new string key into actual name key
            };
        });
    } 
    
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "" 
        });
        event.preventDefault();
    }

    function expand() {
        setIsExpended(true);
    }

    return (
        <div>
        <form className="create-note">
            {isExpended ? <input 
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title"
            /> : null}
            <textarea
                onClick={expand} 
                name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder="Take a note..." 
                rows={isExpended ? "3" : "1"}
            />
          <Zoom in ={isExpended}>
            <Fab onClick={submitNote}>
                <AddBoxIcon />
            </Fab>
          </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
