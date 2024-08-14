import { ReactElement } from "react";
import { ICocktail } from "../interfaces";
import { ReadMoreButton } from "./ReadMoreButton";
import { useCocktailContext } from "../hooks/useCocktailContext";

interface SearchResultProps {
    cocktails: ICocktail[];
}

export function SearchResult({cocktails}: SearchResultProps): ReactElement {
    const context = useCocktailContext();

    return <li>
        {cocktails.map((cocktail) => (<div className="cocktail-search-row">
            <ReadMoreButton cocktail={cocktail} text={cocktail.name} clickReadMore={context.goToInfoPage}/>
            </div>
        ))}
    </li>
}