import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { SearchResult } from "../components";
import { ICocktail } from "../interfaces";

//async function 

export function FavoritesPage(): ReactElement {
    const [favorites, setFavorites] = useState<ICocktail[]>([]);

    useEffect(() => {
        setFavorites(loadFavorites());
        console.log("use effect favorites page")
    }, []);

    const loadFavorites = ():ICocktail[] => {
        const loadFavoritesAsString: string | null = localStorage.getItem("favorites");
        if (loadFavoritesAsString !== null) {
            console.log("Favorites: "+ loadFavoritesAsString);
            console.log("FavoritesPage render")
            const favoritesAsStrings: string[] = loadFavoritesAsString.split(",");
            const newFavorites = favorites;
            favoritesAsStrings.forEach(id => {
                getCocktail(id).then((c) => newFavorites.push(c[0]));
                console.log("new favorites " + newFavorites)
            });
            return newFavorites;
        }
        else {
            console.log("No favorites detected!")
            return [];
        }
    }

    const handleOnClick = () => {
        localStorage.clear();
        setFavorites(loadFavorites());
    }

    const handle = () => {
        setFavorites(loadFavorites());
    }

    return <div>
        <SearchResult cocktails={favorites}/>
        <button className="button-template" onClick={handleOnClick}>Clear</button>
        <button className="button-template" onClick={handle}>Load</button>
    </div>
}
