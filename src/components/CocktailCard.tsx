import { ReactElement, ReactNode } from "react";

import '../css/Cocktail.css'
import { useCocktailContext } from "../hooks/useCocktailContext";
import { ICocktail } from "../interfaces";

interface CocktailProps {
    cocktail: ICocktail;
    readMore: boolean;
}

export function Cocktail({cocktail, readMore}: CocktailProps): ReactElement {
    const context = useCocktailContext();

    const handleOnClick = () => {
        context.goToInfoPage(cocktail);
    }

    const buttonNode = (rm: boolean):ReactNode => {
        return (rm?
            <button onClick={handleOnClick}>Read more</button> :
            <div></div>);
    }

    return <div className="cocktail-card">
        <figure className="cocktail-figure">
            <img src={cocktail.thumbnail} className="cocktail-image"></img>
        </figure>
        <p className="cocktail-name">{cocktail.name}</p>
        {buttonNode(readMore)}
    </div>;
}
