import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { SearchResultList } from "./SearchResultList";

interface SearchResultProps {
    cocktails: ICocktail[];
}

export function SearchResult({cocktails}: SearchResultProps): ReactElement {
    const [index, setIndex] = useState<number>(0);
    const pages: ICocktail[][] = [];
    const length = cocktails.length;
    const sortedList = [...cocktails.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name))];
    for (let i = 0; i * 10 < length; i += 1) {
        if (cocktails.length > 10) {
            pages[i] = sortedList.splice(0, 10);
        }
        else {
            pages[i] = sortedList;
        }
    }
    
    let displayPage = pages[index];

    /* Button functions */
    const updateIndex = (newValue: number) => {
        if (newValue >= 0 && newValue < pages.length) {
            setIndex(newValue);
        }
    }

    const handleOnClickDecrement: React.MouseEventHandler<HTMLButtonElement> = () => {
        updateIndex(index - 1);
    }

    const handleOnClickIncrement: React.MouseEventHandler<HTMLButtonElement> = () => {
        updateIndex(index + 1);
    }

    /* Return ReactElement */
    return <div>
        <button className="button-template" onClick={handleOnClickDecrement}>Previous page</button>
        <button className="button-template" onClick={handleOnClickIncrement}>Next page</button>
        <p>Result: {length} Page: {index + 1} of {pages.length}</p>
        <SearchResultList results={displayPage}/>
    </div>
}
