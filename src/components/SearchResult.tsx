import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { ReadMoreButton } from "./ReadMoreButton";
import { useCocktailContext } from "../hooks/useCocktailContext";

interface SearchResultProps {
    cocktails: ICocktail[];
}

export function SearchResult({cocktails}: SearchResultProps): ReactElement {
    const {goToInfoPage} = useCocktailContext();
    const [index, setIndex] = useState<number>(0);
    const [resultPages, setResultPages] = useState<ICocktail[][]>([cocktails]);

    const pages = [cocktails];
    for (let i = 0; i * 10 < cocktails.length + 10; i += 1) {
        if (cocktails.length > 10) {
            pages[i] = cocktails.splice(i, 10);
            console.log("array at index " + i)
            console.log(pages[i])
        }
        else {
            pages[i] = cocktails;
        }
    }
    console.log("pages");
    console.log(pages);

    useEffect(() => {
        console.log("useEffect in search results!")
        
        setResultPages(pages);
    }, []);

    

    console.log("final result")
    console.log(resultPages)

    const updateIndex = (newValue: number) => {
        if (newValue > 0 && newValue < resultPages.length) {
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
        <p>index: {index}</p>
        <li>
            {resultPages[index].map((cocktail) => (<div className="cocktail-search-row">
                <ReadMoreButton cocktail={cocktail} text={cocktail.name} clickReadMore={goToInfoPage}/>
                </div>
            ))}
        </li>
    </div>
}