import { ReactElement, ReactNode } from "react";
import { ICocktail } from "../interfaces";
import { Cocktail } from ".";

import "../css/CocktailInfo.css"

interface CocktailInfoProps {
    cocktail: ICocktail;
}

export function CocktailInfo({cocktail}: CocktailInfoProps): ReactElement {
    
    
    return <div className="cocktail-info">
        <Cocktail cocktail={cocktail} readMore={false}/>
        <div className="cocktail-info-side">
            <p>{cocktail.category}</p>
            <div className="cocktail-ingredients-list">
                <span>
                {cocktail.ingredients.map((ingredient) => (
                    <p key={ingredient}>{ingredient}</p>
                ))}
                </span>
                <span>
                {cocktail.measures.map((measure) => (
                    <p key={measure}>{measure}</p>
                ))}
                </span>
            </div>
        </div>
        <p>{cocktail.tags}</p>
    </div>
}