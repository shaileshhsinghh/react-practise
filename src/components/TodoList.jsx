function TodoList ({ todos }) {
    return (
        <div>
            <h2>All Todos</h2>
            {todos.map((todo)=> (
                <div key={todo.id}style={ {marginBottom:"10px"} }>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;