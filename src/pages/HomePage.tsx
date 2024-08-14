import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { ICocktail } from "../interfaces";
import { Cocktail } from "../components";
import { Link } from "react-router-dom";
import { defaultCocktail } from "../defaultCocktail";

export function HomePage(): ReactElement {
    const [randomCocktail, setRandomCocktail] = useState<ICocktail>(defaultCocktail());

    useEffect(() => {
        updateRandomCocktail();
    }, []);

    const setRC = (c: ICocktail) => {
        setRandomCocktail(c);
    }

    const updateRandomCocktail = () => {
        getCocktail("", "", true).then((cs: ICocktail[]) => {
            cs.map((c: ICocktail) => {
                setRC(c);
            })
        })
    }

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        updateRandomCocktail();
    }

    return <div>
        <Cocktail key={randomCocktail.id} cocktail={randomCocktail} readMore={true}/>
        <button onClick={handleOnClick}>Another cocktail?</button>
    </div>
}
