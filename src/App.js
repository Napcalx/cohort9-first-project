import React from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="App">
            <TodoProvider>
                <div className="kanban-board">
                    <div className="kanban-column">
                        <h2>All Todos</h2>
                        <TodoList status="all" />
                    </div>
                    <div className="kanban-column">
                        <h2>Uncompleted Todos</h2>
                        <TodoList status="uncompleted" />
                    </div>
                    <div className="kanban-column">
                        <h2>Completed Todos</h2>
                        <TodoList status="completed" />
                    </div>
                    <div className="kanban-column">
                        <h2>Add New Todos</h2>
                        <TodoInput />
                    </div>
                </div>
            </TodoProvider>
        </div>
    );
};

export default App;
