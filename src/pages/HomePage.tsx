import { ReactElement, useEffect, useState } from "react";
import { Cocktail } from "../components/Cocktail";
import { getCocktail } from "../getCocktail";
import { ICocktail } from "../interfaces";

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

    return <div>
        <input type="text"></input>
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