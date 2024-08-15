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
    console.log(results[0])

    const tempFunc = () => {
        console.log("Rendering list items")
        results.map((cocktail) => console.log(cocktail));
        return results.map((cocktail) => (<div key={cocktail.id + "button"} className="cocktail-search-row">
            <ReadMoreButton cocktail={cocktail} text={cocktail.name} clickReadMore={goToInfoPage}/>
            </div>
        ))
    }

    return <li>
    {tempFunc()}
</li>
}
