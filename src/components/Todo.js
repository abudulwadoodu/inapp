import React from "react";

const Todo = ({ todoList, addTodo, removeTodo, editTodo }) => {
    const handleAddTodo = () => {
        const name = prompt("Enter TODO name:");
        if (name) {
            addTodo(name);
        }
    };

    const handleEditTodo = (id, currentName) => {
        const newName = prompt("Update Task:", currentName);
        if (newName) {
            editTodo(id, newName);
        }
    };

    return (
        <div className="component1">
            <h1>Todo List</h1>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={() => handleEditTodo(todo.id, todo.name)}>Edit</button>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    );
};

export default Todo;