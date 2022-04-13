export const CreateTodo = ({onCreate}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.todo.value;

        if(e.target.todo.value) {
            onCreate(prev => [
                ...prev,
                {
                    title,
                    completed:false,
                    id: Date.now(),
                }
            ])
        }
    };
    return (
        <form onSubmit={handleSubmit} autoComplete={'off'}>
            <input type="text" placeholder={'New todo'} name={'todo'}/>
            <input type="submit" value={'Add Todo'}/>
        </form>
    )
}