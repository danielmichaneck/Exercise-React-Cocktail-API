import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { useCocktailContext } from "../hooks/useCocktailContext";
import { ReadMoreButton } from "./ReadMoreButton";

interface SearchResultListProps {
    results: ICocktail[];
}

export function SearchResultList({results}: SearchResultListProps): ReactElement {
    // const [cocktails, setCocktails] = useState<ICocktail[]>(results);

    // useEffect(() => {
    //     setTimeout(() => {
    //     setCocktails(results);
    //     console.log("Setting cocktails in SearchResultList")
    //     console.log(results)
    // // }, 500)}, [results])

    // useEffect(() => {
    //     setCocktails(results);
    //     console.log("Setting cocktails in SearchResultList")
    //     console.log(results)
    // }, [results])

    const {goToInfoPage} = useCocktailContext();

    const tempFunc = () => {
        console.log("Rendering list items")
        console.log(results);
        return results.map((cocktail) => (<div key={cocktail.id + "button"} className="cocktail-search-row">
            <ReadMoreButton cocktail={cocktail} text={cocktail.name} clickReadMore={goToInfoPage}/>
            </div>
        ))
    }

    return <li>
        {tempFunc()}
</li>
}
