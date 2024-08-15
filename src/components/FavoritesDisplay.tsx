import { ReactElement } from "react";
import { SearchResult } from ".";
import { ICocktail } from "../interfaces";

interface FavoritesDisplayProps {
    cocktails: ICocktail[];
    clearAction: () => void;
}

export function FavoritesDisplay({cocktails, clearAction}: FavoritesDisplayProps): ReactElement {
    return <div>
        <SearchResult cocktails={cocktails}/>
        <button className="button-template" onClick={clearAction}>Clear</button>
    </div>
}