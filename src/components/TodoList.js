import React from "react";
import { useTodoContext } from "../context/TodoProvider";
import UpdateTodo from "./UpdateTodo";

const TodoList = ({ status }) => {
    const { todos } = useTodoContext();

    const filteredTodos = todos.filter((todo) => {
        if(status === "completed") {
            return todo.completed;
        } else if (status === "uncompleted") {
            return !todo.completed;
        }else {
            return true;
        }
    });

    return (
        <ul className="todoTabs">
            {filteredTodos.map((todo) => (
                <UpdateTodo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;