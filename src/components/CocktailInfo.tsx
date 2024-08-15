import { ReactElement, ReactNode } from "react";
import { ICocktail } from "../interfaces";
import { Cocktail } from ".";

interface CocktailInfoProps {
    cocktail: ICocktail;
}

export function CocktailInfo({cocktail}: CocktailInfoProps): ReactElement {
    
    
    return <div className="cocktail-info">
        <Cocktail cocktail={cocktail} addFavorite={true} readMore={false}/>
        <div className="cocktail-info-side">
            Category
            <p>{cocktail.category}</p>
            <div className="cocktail-ingredients-list">
                Ingredients and measurements
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
        <p>Tags {cocktail.tags}</p>
    </div>
}
