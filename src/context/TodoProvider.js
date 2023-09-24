import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
 const [todos, setTodos] = useState([]);
 const [editId, setEditId] = useState(null);
 const [inputText, setInputText] = useState("");

 useEffect(() => {
  let canceled = false;
  fetch("https://jsonplaceholder.typicode.com/todos")
   .then((res) => res.json())
   .then((data) => {
    if (!canceled) {
     setTodos(data.slice(0, 10));
    }
   })
   .catch((err) => {
    console.error(err);
   });

  return () => (canceled = true);
 }, []);

 const addTodo = () => {
  const newTodo = {
   id: todos.length + 1,
   title: inputText,
   completed: false,
  };
  if (newTodo.title !== "") {
   console.log(newTodo.title);
   setTodos([...todos, newTodo]);
  }
  setInputText("");
  console.log(todos);
  console.log(todos[0].title);
 };

 const handleInputChange = (e) => {
  setInputText(e.target.value);
 };

 const handleCheck = (id) => {
  const newTodos = todos.map((todo) =>
   todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(newTodos);
 };

 const handleDelete = (id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
 };

 const handleEdit = (id, title) => {
  const newTodos = todos.map((todo) =>
   todo.id === id ? { ...todo, title, completed: false } : todo
  );
  title !== "" && setTodos(newTodos);
 };

 return (
  <TodoContext.Provider
   value={{
    todos,
    editId,
    inputText,
    addTodo,
    setEditId,
    handleCheck,
    handleDelete,
    handleEdit,
    handleInputChange,
   }}
  >
   {children}
  </TodoContext.Provider>
 );
};