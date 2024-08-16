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
    const cocktailArray: ICocktail[] = await tempFunc(strings);
    return cocktailArray;
}

async function tempFunc(strings: string[]): Promise<ICocktail[]> {
    const cocktailArray: ICocktail[] = [];
    if (strings.length < 1) {
        return cocktailArray;
    }
    const cocktail = await stringToCocktail(strings[0]);
    if (cocktail !== null) {
        cocktailArray[0] = cocktail;
    }
    const newStrings = strings.filter((string) => string !== strings[0]);
    const nextArray = await tempFunc(newStrings);
    return [...cocktailArray, ...nextArray];
}

async function stringToCocktail(str: string): Promise<ICocktail | null> {
    const cocktail = await getCocktail(str);
    return cocktail[0];
}
