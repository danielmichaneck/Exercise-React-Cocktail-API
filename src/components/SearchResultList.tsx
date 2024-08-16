import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { useCocktailContext } from "../hooks/useCocktailContext";
import { ReadMoreButton } from "./ReadMoreButton";

interface SearchResultListProps {
    results: ICocktail[];
}

export function SearchResultList({results}: SearchResultListProps): ReactElement {
    const {goToInfoPage} = useCocktailContext();

    const tempFunc = () => {
        if (results !== undefined) {
            return results.map((cocktail) => (<div key={cocktail.id + "button"} className="cocktail-search-row">
                <ReadMoreButton cocktail={cocktail} text={cocktail.name} clickReadMore={goToInfoPage}/>
                </div>
            ))
        }
        else return <></>
    }

    return <li>
        {tempFunc()}
</li>
}
