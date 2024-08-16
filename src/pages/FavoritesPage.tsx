import { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { FavoritesDisplay } from "../components";
import { ICocktail } from "../interfaces";

export function FavoritesPage(): ReactElement {
    const [favorites, setFavorites] = useState<ICocktail[]>([]);
    const [page, setPage] = useState<ReactNode>(<></>);

    // const loadFavorites = useCallback(async (): Promise<ICocktail[]> =>  {
    //     try {
    //         const loadFavoritesAsString: string = localStorage.getItem("favorites")!;
    //         const favoritesAsStrings = loadFavoritesAsString.split(",");
    //         const data = await stringsToCocktails(favoritesAsStrings);
    //         console.log("data ")
    //         console.log(data)
    //         return data;
    //     }
    //     catch(error) {
    //         console.log("No favorites detected!")
    //         return [];
    //     }
    // }, []);

    useEffect(() => {
        console.log("Favorite page use effect")
        if (favoriteCheck) {
            loadFavorites().then((favs) => {
                setFavorites(favs);
                console.log("favs");
                console.log(favs);
                //setPage(<FavoritesDisplay cocktails={favs} clearAction={localStorage.clear}/>);
            })
        }
    }, [/*loadFavorites*/]);

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

    const favoriteCheck = localStorage.getItem("favorites") !== null && favorites.length < 1;

    return <div className="favorites-page">
        <FavoritesDisplay cocktails={favorites} clearAction={localStorage.clear}/>
    </div>
}



async function stringsToCocktails(strings: string[]): Promise<ICocktail[]> {
    const cocktailArray: ICocktail[] = [];
    strings.forEach(id => {
        stringToCocktail(id).then((c) => cocktailArray.push(c!))
    });
    return cocktailArray;
}

async function stringToCocktail(str: string): Promise<ICocktail | null> {
    const cocktail = await getCocktail(str);
    return cocktail[0];
}
