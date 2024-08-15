import { ReactElement, ReactNode } from "react";
import { useCocktailContext } from "../hooks/useCocktailContext";
import { ICocktail } from "../interfaces";
import { ReadMoreButton } from "./ReadMoreButton";
import { AddFavoriteButton } from "./AddFavoriteButton";

interface CocktailProps {
    addFavorite: boolean;
    cocktail: ICocktail;
    readMore: boolean;
}

export function Cocktail({addFavorite, cocktail, readMore}: CocktailProps): ReactElement {
    const context = useCocktailContext();

    const handleOnClickReadMore = () => {
        context.goToInfoPage(cocktail);
    }

    const handleOnClickAddFavorite = () => {
        context.addFavorite(cocktail.id);
    }

    const addFavoriteButton = (rm: boolean):ReactNode => {
        return (rm?
            <div><AddFavoriteButton cocktailID={cocktail.id} text="Add favorite" clickAddFavorite={handleOnClickAddFavorite}/></div> :
            <div></div>);
    }

    const readMoreButton = (rm: boolean):ReactNode => {
        return (rm?
            <div><ReadMoreButton cocktail={cocktail} text="Read more" clickReadMore={handleOnClickReadMore}/></div> :
            <div></div>);
    }

    return <div className="cocktail-card">
        <figure className="cocktail-figure">
            <img src={cocktail.thumbnail} className="cocktail-image"></img>
        </figure>
        <p className="cocktail-name">{cocktail.name}</p>
        {readMoreButton(readMore)}
        {addFavoriteButton(addFavorite)}
    </div>;
}
