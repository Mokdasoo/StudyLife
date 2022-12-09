import React, {useState} from "react"
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string)=>void;
    removeTodo: (id:string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string) => {}
});

type Props = {
    children?: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const AddTodoHandler = (text: string) => {
      const newTodo = new Todo(text);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    };
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId);
      })
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: AddTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>;
};

export default TodosContextProvider;