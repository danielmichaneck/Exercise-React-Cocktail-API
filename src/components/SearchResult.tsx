import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { SearchResultList } from "./SearchResultList";

interface SearchResultProps {
    cocktails: ICocktail[];
}

export function SearchResult({cocktails}: SearchResultProps): ReactElement {
    const [index, setIndex] = useState<number>(0);
    const [resultNumber, setResultNumber] = useState<number>(0);
    const [resultPages, setResultPages] = useState<ICocktail[][]>([cocktails]);

    const pages: ICocktail[][] = [
        cocktails.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name))
    ];

    const length = cocktails.length;
    let numberOfElements = 0;
    for (let i = 0; i * 10 < length; i += 1) {
        if (cocktails.length > 10) {
            pages[i] = cocktails.splice(i, 10);
        }
        else {
            pages[i] = cocktails;
        }
        numberOfElements += pages[i].length;
    }

    useEffect(() => {
        setResultPages(pages);
        setResultNumber(numberOfElements);
    }, [cocktails]);

    const updateIndex = (newValue: number) => {
        if (newValue >= 0 && newValue < resultPages.length) {
            setIndex(newValue);
        }
    }

    const handleOnClickDecrement: React.MouseEventHandler<HTMLButtonElement> = () => {
        updateIndex(index - 1);
    }

    const handleOnClickIncrement: React.MouseEventHandler<HTMLButtonElement> = () => {
        updateIndex(index + 1);
    }

    return <div>
        <button onClick={handleOnClickDecrement}>Previous page</button>
        <button onClick={handleOnClickIncrement}>Next page</button>
        <p>Result: {resultNumber} Page: {index + 1}</p>
        <SearchResultList results={resultPages[index]}/>
    </div>
}
