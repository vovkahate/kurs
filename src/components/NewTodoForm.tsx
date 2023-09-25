import { useRef } from "react";

interface NewTodoFormProps {
    handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: NewTodoFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value);
            inputRef.current.value = "";
        }
    };
    return (
        <>
            <input type="text" placeholder="New Todo" ref={inputRef} />
            <button onClick={onClick}>Add Todo</button>
        </>
    );
};

export default NewTodoForm;
