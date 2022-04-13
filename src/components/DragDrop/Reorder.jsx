import {useState} from "react";
import {CreateTodo} from "./CreateTodo";
import {Todos} from "./Todos";

const defaultTodos = [
    {
        id:1,
        title: 'Learn js',
        completed:false,
    },
    {
        id:2,
        title: 'Create nice animation',
        completed:false,
    },
    {
        id:3,
        title: 'Use reorder',
        completed:false,
    }
]

export const Reorder = () => {
    const [todos, setTodos] = useState(defaultTodos);

    const onRemove = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    }

    return (
        <div>
            <CreateTodo onCreate={setTodos} />
            <Todos todos={todos} setTodos={setTodos} onRemove={onRemove}/>
        </div>
    )
}