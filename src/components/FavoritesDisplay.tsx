import { ReactElement } from "react";
import { SearchResult } from ".";
import { ICocktail } from "../interfaces";

interface FavoritesDisplayProps {
    cocktails: ICocktail[];
    clearAction: () => void;
}

export function FavoritesDisplay({cocktails, clearAction}: FavoritesDisplayProps): ReactElement {
    console.log("FavoritesDisplay")
    console.log(cocktails)
    return <div className="favorites-display">
        <SearchResult cocktails={cocktails}/>
        <button className="button-template" onClick={clearAction}>Clear</button>
    </div>
}
