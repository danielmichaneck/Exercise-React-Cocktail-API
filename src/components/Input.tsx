import { ReactElement, useState } from "react";

interface InputProps {
    setValue: (value: string) => void;
}

export function Input({setValue}: InputProps): ReactElement {
    const [inputValue, setInputValue] = useState<string>("");

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value);
        setValue(inputValue);
    }

    return <input type="text" value={inputValue} onChange={handleOnChange}/>
}