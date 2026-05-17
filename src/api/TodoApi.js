const BASE_URL = "https://localhost:3000/api";

 export const allTodos = async()=>{
    const res = await fetch(`${BASE_URL}/seeall`);
    const data = await res.json();
    return data.data || data ;
}

export const createTodo = async(title,description)=>{
    const res = await fetch(`${BASE_URL}/create`,{
        method : "POST",
        headers : {"Content-type" : "application/json "},
        body : JSON.stringify({ title, description }),
    });

    const data = await res.json();
    return data.data;
}