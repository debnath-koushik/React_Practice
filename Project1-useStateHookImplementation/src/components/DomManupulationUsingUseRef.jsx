import React, { useRef, forwardRef } from 'react'

const MyButton = forwardRef(
    (props, ref) => {
        return (
        <input ref={ref} type="search" placeholder="search2..." />
    )}
)

export const DomManupulationUsingUseRef = () => {

    const inputRef = useRef();

    const onSearchClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} type="text" placeholder='search...' />{ /*Every input fields have a ref attribute that can be used to access the DOM element directly*/}
            <button onClick={onSearchClick}>Search</button>
            <div>
                <MyButton text="hello" ref={inputRef} />
            </div>
        </>
    )
}
