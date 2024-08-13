import { ReactElement, useEffect, useState } from "react";
import { Cocktail } from "../components/Cocktail";
import { getCocktail } from "../getCocktail";
import { ICocktail } from "../interfaces";

export function HomePage(): ReactElement {
    const [cocktailText, setCocktailText] = useState<string>("");
    const [numberOfUpdates, setNumberOfUpdates] = useState<number>(0);

    const setFunc = (value: string) => {
        console.log("Cocktail text:")
        console.log(cocktailText);
        setCocktailText(value);
    }

    useEffect(() => {
        setTimeout(() => {
            getCocktail().then((cocktail: ICocktail[]) => {
                //setFunc(cocktail.name);
                setNumberOfUpdates(numberOfUpdates + 1);
                console.log("Cocktails in Homepage: ");
                console.log(cocktail[1].name);
                console.log("Number of updates: " + numberOfUpdates)
            })
        }, 1000
    )}, [])

    return <div>
        <Cocktail text={cocktailText}/>
    </div>
}