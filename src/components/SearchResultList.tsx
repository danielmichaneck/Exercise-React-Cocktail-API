import { ReactElement } from "react";
import { ICocktail } from "../interfaces";
import { useCocktailContext } from "../hooks/useCocktailContext";
import { ReadMoreButton } from "./ReadMoreButton";

interface SearchResultListProps {
    results: ICocktail[];
}

export function SearchResultList({results}: SearchResultListProps): ReactElement {
    const {goToInfoPage} = useCocktailContext();
    console.log("Rendering list")
    console.log(results)
    return <li>
    {results.map((cocktail) => (<div className="cocktail-search-row">
        <ReadMoreButton cocktail={cocktail} text={cocktail.name} clickReadMore={goToInfoPage}/>
        </div>
    ))}
</li>
}