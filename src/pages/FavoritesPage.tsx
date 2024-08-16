import { ReactElement, ReactNode, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { FavoritesDisplay } from "../components";
import { ICocktail } from "../interfaces";

export function FavoritesPage(): ReactElement {
    const [favorites, setFavorites] = useState<ICocktail[]>([]);

    useEffect(() => {
        const favoriteCheck = localStorage.getItem("favorites") !== null;
        if (favoriteCheck) {
            console.log("favoriteCheck!")
            loadFavorites().then((fs) => {
                setFavorites(fs);
            })
        }
        else {
            console.log("No favorites were found!");
        }
    }, []);

    console.log("favorites")
    console.log(favorites)

    return <div className="favorites-page">
        <FavoritesDisplay cocktails={favorites} clearAction={localStorage.clear}/>
    </div>
}



async function loadFavorites(): Promise<ICocktail[]> {
    try {
        const loadFavoritesAsString: string = localStorage.getItem("favorites")!;
        const favoritesAsStrings = loadFavoritesAsString.split(",");
        const cocktails = await stringsToCocktails(favoritesAsStrings);
        console.log("cocktails data");
        console.log(cocktails);
        return cocktails;
    }
    catch(error) {
        console.log("No favorites detected!")
        return [];
    }
}

async function stringsToCocktails(strings: string[]): Promise<ICocktail[]> {
    const cocktailArray: ICocktail[] = await tempFunc(strings);
    console.log("strings To Cocktails")
    console.log(cocktailArray)
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
    console.log("stringToCocktail")
    console.log(cocktail)
    return cocktail[0];
}
