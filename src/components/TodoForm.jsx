import { useState } from "react";

function TodoForm({addTodo}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handlesubmit = async(e)=>{
        e.preventDefault();
        await addTodo(title, description);
        setTitle("");
        setDescription("");
    };

    return(
       <form onSubmit={handlesubmit}>
         <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea
        placeholder="Write Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
       </form>
    );
}

export default TodoForm;