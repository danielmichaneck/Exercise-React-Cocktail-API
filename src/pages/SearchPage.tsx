import { ReactElement, useEffect, useState } from "react";
import { SearchForm, Cocktail } from "../components";
import { getCocktail } from "../getCocktail";
import { ICocktail, ISearch } from "../interfaces";
import { Link } from "react-router-dom";
import { defaultCocktail } from "../defaultCocktail";

export function SearchPage(): ReactElement {
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         getCocktail().then((cs: ICocktail[]) => {
    //             let co: ICocktail[] = [defaultCocktail()];
    //             cs.map((c: ICocktail) => {
    //                 co.push(c);
    //             })
    //             setCocktails(co);
    //         })
    //     }, 1000
    // )}, [])

    const submit = (search: ISearch) => {
        getCocktail("", search.name, false).then((cs: ICocktail[]) => {
            let co: ICocktail[] = [];
            cs.map((c: ICocktail) => {
                co.push(c);
            })
            setCocktails(co);
        })
    }

    return <div>
        <SearchForm submit={submit}/>
        {cocktails?.map((cocktail) => {
            return <Cocktail key={cocktail.id} cocktail={cocktail} readMore={true}/>
        })}
    </div>
}
