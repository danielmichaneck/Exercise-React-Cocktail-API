import { ReactElement, useState } from "react";
import { SearchForm } from "../components";
import { getCocktail } from "../getCocktail";
import { ICocktail, ISearch } from "../interfaces";
import { SearchResult } from "../components/SearchResult";

export function SearchPage(): ReactElement {
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);

    const submit = (search: ISearch) => {
        getCocktail("", search.name, false).then((cs: ICocktail[]) => {
            let co: ICocktail[] = [];
            cs.map((c: ICocktail) => {
                co.push(c);
            })
            setCocktails(co);
        })
    }

    return <div>
        <SearchForm submit={submit}/>
        <SearchResult cocktails={cocktails}/>
    </div>
}
