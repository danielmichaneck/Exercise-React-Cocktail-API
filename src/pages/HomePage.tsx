import { ReactElement, useState } from "react";
import { Cocktail } from "../components/Cocktail";

export function HomePage(): ReactElement {
    const [cocktailText, setCocktailText] = useState<string>("");

    return <div>
        <Cocktail text={cocktailText}/>
    </div>
}