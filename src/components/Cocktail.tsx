import { ReactElement } from "react";
import { ICocktail } from "../interfaces";

interface CocktailProps {
    text: string;
}

export function Cocktail({text}: CocktailProps): ReactElement {
    let cocktail: ICocktail;


    fetchCocktail().then((drinks) => {
        const cocktails: ICocktail[] = drinks.map((drink: any) => (
            
        ))
        console.log("Fetched drinks: " + JSON.stringify(drinks));

        return <p>{drinks}</p>
    })
    setTimeout(() => {
        console.log("No info")
        return <></>
        }, 1000
    );
    return <></>
}

function formatCocktail(data: any): ICocktail {
    let ingredients: string[15];
    for (let i = 0; i < 15; i++) {
        const index = "strIngredient" + (i + 1).toString();
        if (eval("data." + index + " !== null")) {
            ingredients.push(eval("data." + index));
        }
    }

    const cocktail = {
        alcoholic: data.strAlcoholic === "Alcoholic",
        category: data.strCategory,
        glass: data.strGlass,
        iba: data.strIBA,
        id: data.idDrink,
        image: data.strImageSource,
        ingredients: 
    }
}

async function fetchCocktail() {
    try {
        const response = await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        console.log("Response: " + response)
        const result = await response.json();
        console.log("Drinks: " + result)
        return result.drinks;
    }
    catch(error) {
        console.log(error);
    }
}
