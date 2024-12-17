import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import RandomTexts from "./RandomTexts";

const ParentComponent = () => {
    const [todoList, setTodoList] = useState([]);
    const [randomTexts, setRandomTexts] = useState([]);
    const [useLocalStorage, setUseLocalStorage] = useState(
        JSON.parse(localStorage.getItem('useLocalStorage')) ?? true
    );

    useEffect(() => {
        loadTodos();
        generateRandomTexts();
    }, [useLocalStorage]);

    const loadTodos = () => {
        const storage = useLocalStorage ? localStorage : sessionStorage;
        let todoList = JSON.parse(storage.getItem('todoList')) || [];
        if (todoList.length === 0) {
            todoList = [
                { id: 1, name: "Task 1" },
                { id: 2, name: "Task 2" },
                { id: 3, name: "Task 3" },
                { id: 4, name: "Task 4" },
                { id: 5, name: "Task 5" }
            ];
            storage.setItem('todoList', JSON.stringify(todoList)); // Save default tasks to storage
        }
        setTodoList(todoList);
    };

    const saveTodos = (todoList) => {
        const storage = useLocalStorage ? localStorage : sessionStorage;
        storage.setItem('todoList', JSON.stringify(todoList));
    };

    const addTodo = (name) => {
        const newTodo = { id: Date.now(), name };
        const updatedTodoList = [...todoList, newTodo];
        setTodoList(updatedTodoList);
        saveTodos(updatedTodoList);
    };

    const removeTodo = (id) => {
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodoList);
        saveTodos(updatedTodoList);
    };

    const editTodo = (id, newName) => {
        const updatedTodoList = todoList.map(todo =>
            todo.id === id ? { ...todo, name: newName } : todo
        );
        setTodoList(updatedTodoList);
        saveTodos(updatedTodoList);
    };

    const generateRandomText = () => {
        const minLength = 8;
        const maxLength = 64;
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const generateRandomTexts = () => {
        const randomTexts = Array.from({ length: 5 }, () => generateRandomText());
        setRandomTexts(randomTexts);
    };

    const handleStorageChange = (event) => {
        const useLocalStorage = event.target.checked;
        const newStorage = useLocalStorage ? localStorage : sessionStorage;
        const oldStorage = useLocalStorage ? sessionStorage : localStorage;

        // Save current state to the new storage
        newStorage.setItem('todoList', JSON.stringify(todoList));
        localStorage.setItem('useLocalStorage', JSON.stringify(useLocalStorage));

        // Clear the old storage
        oldStorage.removeItem('todoList');

        setUseLocalStorage(useLocalStorage);
    };

    return (
        <div className="app-container">
            <label>
                <input 
                    type="checkbox" 
                    checked={useLocalStorage} 
                    onChange={handleStorageChange} 
                />
                Use LocalStorage
            </label>
            <Todo 
                todoList={todoList} 
                addTodo={addTodo} 
                removeTodo={removeTodo} 
                editTodo={editTodo}
            />
            <RandomTexts 
                randomTexts={randomTexts} 
            />
        </div>
    );
};

export default ParentComponent;