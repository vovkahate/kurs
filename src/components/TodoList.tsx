import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    list: Todo[];
    toggleTodo: (id: Todo["id"]) => void;
    removeTodo: (id: Todo["id"]) => void;
}

const TodoList = ({ list, toggleTodo, removeTodo }: TodoListProps) => {
    return (
        <ul>
            {list.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
