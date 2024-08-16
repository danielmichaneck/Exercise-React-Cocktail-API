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
            Category
            <p>{cocktail.category}</p>
            <div className="cocktail-ingredients-list">
                Ingredients and measurements
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
        </div>
        <p>Tags {cocktail.tags}</p>
    </div>
}
