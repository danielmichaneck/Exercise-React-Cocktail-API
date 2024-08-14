import { ReactElement, useEffect, useState } from "react";
import { SearchForm, Cocktail } from "../components";
import { getCocktail } from "../getCocktail";
import { ICocktail, ISearch } from "../interfaces";

export function SearchPage(): ReactElement {
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);

    const submit = (search: ISearch) => {
        getCocktail("", search.name, false).then((cs: ICocktail[]) => {
            let co: ICocktail[] = [];
            cs.map((c: ICocktail) => {
                co.push(c);
            })
            setCocktails(co);
        })
    }

    return <div className="search-form">
        <SearchForm submit={submit}/>
        {cocktails?.map((cocktail) => {
            return <Cocktail key={cocktail.id} cocktail={cocktail} readMore={true}/>
        })}
    </div>
}
