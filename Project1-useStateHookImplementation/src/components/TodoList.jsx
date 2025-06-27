import React, { useState, useRef } from 'react'

export const TodoList = () => {
    let todoId = useRef(0);
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    const onTextChange = (event) => {
        setText(event.target.value);
    }

    const onSubmitText = () => {
        setTodo([...todo, { id: todoId.current++, todo: text, isChecked: false }]);
        setText('');
    }

    const handleCheckboxChange = (event) => {
        const updatedTodo = todo.map((item) => {
            if (item.id === event) {
                return { ...item, isChecked: !item.isChecked };
            }
            return item;
        });
        setTodo(updatedTodo);
    };

    const onDeleteButton = (id) => {
        setTodo(todo.filter((text) => text.id !== id));
    }


    return (
        <>
            <div className="App">
                <div className="head">
                    <h1>Todo-List</h1>
                    <div className="todoTextInput">
                        <input value={text} type="text" onChange={onTextChange} />
                        <button onClick={onSubmitText}>Submit</button>
                    </div>
                </div>
                <div className="body">
                    {
                        todo.map(text => (
                            <div className="todoItem" key={text.id}>
                                <input type="checkbox" onChange={() => handleCheckboxChange(text.id)} />
                                <span className={text.isChecked ? 'strike-through': ''}>{text.todo}</span>
                                <button onClick={() => onDeleteButton(text.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
