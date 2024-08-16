import { ReactElement, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { FavoritesDisplay } from "../components";
import { ICocktail } from "../interfaces";

export function FavoritesPage(): ReactElement {
    const [favorites, setFavorites] = useState<ICocktail[]>([]);

    useEffect(() => {
        const favoriteCheck = localStorage.getItem("favorites") !== null;
        if (favoriteCheck) {
            loadFavorites().then((fs) => {
                setFavorites(fs);
            })
        }
        else {
            console.log("No favorites were found!");
        }
    }, []);

    const clearAction = () => {
        localStorage.clear();
        setFavorites([]);
    }

    return <div className="favorites-page">
        <FavoritesDisplay cocktails={favorites} clearAction={clearAction}/>
    </div>
}



async function loadFavorites(): Promise<ICocktail[]> {
    try {
        const loadFavoritesAsString: string = localStorage.getItem("favorites")!;
        const favoritesAsStrings = loadFavoritesAsString.split(",");
        const cocktails = await stringsToCocktails(favoritesAsStrings);
        return cocktails;
    }
    catch(error) {
        console.log("No favorites detected!")
        return [];
    }
}

async function stringsToCocktails(strings: string[]): Promise<ICocktail[]> {
    const cocktailArray: ICocktail[] = [];
    for (let i = 0; i < strings.length; i++) {
        const c = await stringToCocktail(strings[i]);
        if (c !== null) {
            cocktailArray[i] = c;
        }
    }
    return cocktailArray;
}

async function stringToCocktail(str: string): Promise<ICocktail | null> {
    const cocktail = await getCocktail(str);
    return cocktail[0];
}
