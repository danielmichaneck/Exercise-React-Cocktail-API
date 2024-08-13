import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { ICocktail, ISearch } from "../interfaces";
import { Cocktail, SearchForm } from "../components";

export function HomePage(): ReactElement {
    const [cocktails, setCocktails] = useState<ICocktail[]>([defaultCocktail()]);

    useEffect(() => {
        setTimeout(() => {
            getCocktail().then((cs: ICocktail[]) => {
                let co: ICocktail[] = [defaultCocktail()];
                cs.map((c: ICocktail) => {
                    co.push(c);
                })
                setCocktails(co);
            })
        }, 1000
    )}, [])

    const submit = (search: ISearch) => {
        getCocktail(search.name).then((cs: ICocktail[]) => {
            let co: ICocktail[] = [defaultCocktail()];
            cs.map((c: ICocktail) => {
                co.push(c);
            })
            setCocktails(co);
        })
    }

    return <div>
        <SearchForm submit={submit}/>
        {cocktails?.map((cocktail) => {
            return <Cocktail key={cocktail.id} text={cocktail.name}/>
        })}
    </div>
}




function defaultCocktail(): ICocktail {
    return {
        alcoholic: false,
        category: "",
        glass: "",
        iba: "",
        id: "",
        image: "",
        ingredients: [""],
        instructions: "",
        measures: [""],
        name: "",
        thumbnail: ""
    }
}