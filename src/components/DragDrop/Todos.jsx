import {AnimatePresence, Reorder} from "framer-motion";

//Reorder - drag and drop для списка
//AnimatePresence - анимация на появление/удаление элемента

const variants = {
    initial: {
        opacity:0,
        height:0,
    },
    animate: {
        opacity:1,
        height:'auto',
    },
    exit: {
        opacity:0,
        height:0,
    }
}

export const Todos = ({setTodos,onRemove, todos = []}) => {
    return (
        <Reorder.Group
            as={"ol"} //пока не можем использ компоненты
            axys={'y'} //по какой оси перемещ элементы
            values={todos}
            onReorder={setTodos}
        >
            <AnimatePresence
                initial={false} //сразу не анимировалось
            >{
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onRemove={onRemove}
                    />
                ))
            }</AnimatePresence>
        </Reorder.Group>
    )
}

const TodoItem = ({todo, onRemove}) => {
    return (
        <Reorder.Item
            value={todo} //любая структура данных
            whileDrag={{
                //анимация во время перемещения
                borderColor:'red',
            }}
            style={{
            border:'1px solid black',
            padding:'10px 20px',
            marginBottom:'10px',
            backgroundColor:'#fff',
            borderRadius:'10px',
        }}
            onDoubleClick={() => onRemove(todo.id)}
            {...variants}
        >
            <span>{todo.title}</span>
        </Reorder.Item>
    )
}