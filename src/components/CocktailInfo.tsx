import { ReactElement, ReactNode, useState } from "react";
import { ICocktail } from "../interfaces";
import { Cocktail } from ".";

interface CocktailInfoProps {
    cocktail: ICocktail;
}

export function CocktailInfo({cocktail}: CocktailInfoProps): ReactElement {
    let keyCount = 0;

    const getKey = () => {
        keyCount++;
        return keyCount;
    }
    
    return <div className="cocktail-info">
        <Cocktail cocktail={cocktail} addFavorite={true} readMore={false}/>
        <div className="cocktail-info-side">
            <p>Category: {cocktail.category}</p>
            <p>Glass: {cocktail.glass}</p>
            Ingredients and measurements
            <div className="cocktail-ingredients-list">
                <span>
                {cocktail.ingredients.map((ingredient) => (
                    <p key={getKey()}>{ingredient}</p>
                ))}
                </span>
                <span>
                {cocktail.measures.map((measure) => (
                    <p key={getKey()}>{measure}</p>
                ))}
                </span>
            </div>
            <p>Instructions</p>
            <p>{cocktail.instructions}</p>
            <p>Tags (if any): {cocktail.tags}</p>
        </div>
    </div>
}
