import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { ICocktail } from "../interfaces";
import { Cocktail } from "../components";
import { Link } from "react-router-dom";
import { defaultCocktail } from "../defaultCocktail";

export function HomePage(): ReactElement {
    const [randomCocktail, setRandomCocktail] = useState<ICocktail>(defaultCocktail());

    const setRC = (c: ICocktail) => {
        setRandomCocktail(c);
    } 

    useEffect(() => {
        getCocktail("", true).then((cs: ICocktail[]) => {
            cs.map((c: ICocktail) => {
                console.log("Random cocktail: " + c)
                setRC(c);
            })
        })
    }, []);
    


    return <div>
        <Link to="/search-cocktail">Search</Link>
        <Cocktail key={randomCocktail.id} text={randomCocktail.name}/>
    </div>
}
