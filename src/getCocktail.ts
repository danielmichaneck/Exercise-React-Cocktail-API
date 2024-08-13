import { ICocktail } from "./interfaces";

export async function getCocktail(name: string = "", random: boolean = false): Promise<ICocktail[]> {
    let cocktails: ICocktail[] = [];

    const pushCocktail = (cocktail: ICocktail) => {
        //console.log(cocktail);
        cocktails.push(cocktail);
        //console.log(cocktails);
    }
    
    await fetchCocktail(name, random).then((drinks) => {
        if (drinks !== undefined && drinks !== null) {
            drinks.map((drink: ICocktail | undefined) => (
                (drink !== undefined) &&
                pushCocktail(formatCocktail(drink))
            ))
            console.log("getCocktail: ");
            console.log(cocktails);
            return cocktails;
        }
    })

    return cocktails;
}

function formatCocktail(data: any): ICocktail {
    let ingredients: string[] = [""];
    let measures: string[] = [""];
    let index: string = "";
    for (let i = 0; i < 15; i++) {
        index = "strIngredient" + (i + 1).toString();
        if (eval("data." + index + " !== null")) {
            ingredients.push(eval("data." + index));
        }
        index = "strMeasure" + (i + 1).toString();
        if (eval("data." + index + " !== null")) {
            measures.push(eval("data." + index));
        }
    }

    const cocktail = {
        alcoholic: data.strAlcoholic === "Alcoholic",
        category: data.strCategory,
        glass: data.strGlass,
        iba: data.strIBA,
        id: data.idDrink,
        image: data.strImageSource,
        ingredients: ingredients,
        instructions: data.strInstructions,
        measures: measures,
        name: data.strDrink,
        thumbnail: data.strDrinkThumb
    }
    return cocktail;
}

async function fetchCocktail(name?: string, random?: boolean) {
    try {
        let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
        if (name !== undefined) {
            url += name;
        }
        if (random === true) {
            url = "https://thecocktaildb.com/api/json/v1/1/random.php";
        }
        const response = await fetch(url);
        const result = await response.json();
        console.log("Result: " + JSON.stringify(result.drinks));
        return result.drinks;
    }
    catch(error) {
        console.log("Fetch cocktail error: " + error);
    }
}
