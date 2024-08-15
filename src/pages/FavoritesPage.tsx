import { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import { getCocktail } from "../getCocktail";
import { FavoritesDisplay } from "../components";
import { ICocktail } from "../interfaces";

export function FavoritesPage(): ReactElement {
    const [favorites, setFavorites] = useState<ICocktail[]>([]);
    const [page, setPage] = useState<ReactNode>(<></>);

    const loadFavorites = useCallback(async (): Promise<ICocktail[]> =>  {
        try {
            const loadFavoritesAsString: string = localStorage.getItem("favorites")!;
            const favoritesAsStrings = loadFavoritesAsString.split(",");
            const data = await stringsToCocktails(favoritesAsStrings);
            console.log("data ")
            console.log(data)
            return data;
        }
        catch(error) {
            console.log("No favorites detected!")
            return [];
        }
    }, [])

    useEffect(() => {
        console.log("Favorite page use effect")
        if (favoriteCheck) {
            loadFavorites().then((favs) => {
                setFavorites(favs);
                console.log("favs");
                console.log(favs);
                setPage(<FavoritesDisplay cocktails={favs} clearAction={localStorage.clear}/>);
            })
        }
    }, [loadFavorites]);

    const favoriteCheck = localStorage.getItem("favorites") !== null;

    return <div>{page}</div>
}

async function stringsToCocktails(strings: string[]): Promise<ICocktail[]> {
    const cocktailArray: ICocktail[] = [];
    strings.forEach(id => {
        stringToCocktail(id).then((c) => cocktailArray.push(c!))
    });
    console.log("strings")
    console.log(cocktailArray)
    return cocktailArray;
}

async function stringToCocktail(str: string): Promise<ICocktail | null> {
    const cocktail: ICocktail = await getCocktail(str).then((c) => {
        return c[0]
    });
    return cocktail;
}
