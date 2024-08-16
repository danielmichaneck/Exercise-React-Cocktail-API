import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { ICocktail } from "../interfaces";
import { Cocktail } from "../components";
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

    return <div className="homepage-landing">
        <div className="homepage-landing-left-column">
        <Cocktail key={randomCocktail.id} addFavorite={false} cocktail={randomCocktail} readMore={true}/>
        <button className="button-template" onClick={handleOnClick}>Another cocktail?</button>
        </div>
        <div className="homepage-landing-right-column">
        <p>Welcome to the cocktails page! Click "Search" to search for a cocktail. Click "Favorites" to view all your saved favorite cocktails.</p>
        </div>
    </div>
}
