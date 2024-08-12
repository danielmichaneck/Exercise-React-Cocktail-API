import { ReactElement } from "react";

interface CocktailProps {
    text: string;
}

export function Cocktail({text}: CocktailProps): ReactElement {
    fetchCocktail().then((drinks) => {
        console.log("Fetched drinks: " + drinks);
        return <p>{drinks}</p>
    })
    setTimeout(() => {
        console.log("No info")
        return <></>
        }, 1000
    );
    return <></>
}

async function fetchCocktail() {
    try {
        const response = await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        console.log("Response: " + response)
        const drinks = await response.text();
        console.log("Drinks: " + drinks)
        return drinks;
    }
    catch(error) {
        console.log(error);
    }
}
