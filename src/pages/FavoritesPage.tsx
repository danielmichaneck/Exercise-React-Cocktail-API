import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { SearchResult } from "../components";
import { ICocktail } from "../interfaces";

export function FavoritesPage(): ReactElement {
    const [favorites, setFavorites] = useState<ICocktail[]>([]);

    const loadFavoritesAsString: string | null = localStorage.getItem("favorites");
    if (loadFavoritesAsString !== null) {
        console.log("Favorites: "+ loadFavoritesAsString);
    }
    else {
        console.log("No favorites detected!")
        return <></>
    }

    const favoritesAsStrings: string[] = loadFavoritesAsString.split(",");
    const newFavorites = favorites;
    favoritesAsStrings.forEach(id => {
        getCocktail(id).then((c) => newFavorites.push(c[0]));
    });

    useEffect(() => {
        setFavorites(newFavorites);
    }, []);

    return <div>
        <SearchResult cocktails={favorites}/>
    </div>
}
