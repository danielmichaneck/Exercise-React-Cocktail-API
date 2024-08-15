import { ReactElement, useState } from "react";
import { Input } from ".";
import { ISearch } from "../interfaces";

interface SearchFormProps {
    submit: (search: ISearch) => void;
}

export function SearchForm({submit}: SearchFormProps): ReactElement {
    const [nameValue, setNameValue] = useState<string>("");

    const onNameValueChange = (value: string) => {
        setNameValue(value);
    }

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        submit({name: nameValue});
    }

    return <form className="cocktail-search-form" onSubmit={handleOnSubmit}><Input setValue={onNameValueChange}/></form>
}
