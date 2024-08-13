import { ICocktail } from "./interfaces";

export async function getCocktail(): Promise<ICocktail[]> {
    let cocktails: ICocktail[] = [];

    const pushCocktail = (cocktail: ICocktail) => {
        //console.log(cocktail);
        cocktails.push(cocktail);
        //console.log(cocktails);
    }
    
    await fetchCocktail().then((drinks) => {
        if (drinks !== undefined) {
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

async function fetchCocktail() {
    try {
        const response = await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        const result = await response.json();
        console.log("Result: " + JSON.stringify(result.drinks));
        return result.drinks;
    }
    catch(error) {
        console.log("Fetch cocktail error: " + error);
    }
}

function defaultCocktail(): ICocktail {
    return {
        alcoholic: false,
        category: "",
        glass: "",
        iba: "",
        id: "",
        image: "",
        ingredients: [""],
        instructions: "",
        measures: [""],
        name: "",
        thumbnail: ""
    }
}

// function defaultCocktailData(): JSON {
//     return "{"
//         idDrink":"11007","
//         strDrink":"Margarita","
//         strDrinkAlternate":null,"
//         strTags":"IBA,ContemporaryClassic","
//         strVideo":null,"
//         strCategory":"Ordinary Drink","
//         strIBA":"Contemporary Classics","
//         strAlcoholic":"Alcoholic","
//         strGlass":"Cocktail glass","
//         strInstructions":"Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.","
//         strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg","
//         strIngredient1":"Tequila","
//         strIngredient2":"Triple sec","
//         strIngredient3":"Lime juice","
//         strIngredient4":"Salt","
//         strIngredient5":null,"
//         strIngredient6":null,"
//         strIngredient7":null,"
//         strIngredient8":null,"
//         strIngredient9":null,"
//         strIngredient10":null,"
//         strIngredient11":null,"
//         strIngredient12":null,"
//         strIngredient13":null,"
//         strIngredient14":null,"
//         strIngredient15":null,"
//         strMeasure1":"1 1\/2 oz ","
//         strMeasure2":"1\/2 oz ","
//         strMeasure3":"1 oz ","
//         strMeasure4":null,"
//         strMeasure5":null,"
//         strMeasure6":null,"
//         strMeasure7":null,"
//         strMeasure8":null,"
//         strMeasure9":null,"
//         strMeasure10":null,"
//         strMeasure11":null,"
//         strMeasure12":null,"
//         strMeasure13":null,"
//         strMeasure14":null,"
//         strMeasure15":null,"
//         strImageSource":"https:\/\/commons.wikimedia.org\/wiki\/File:Klassiche_Margarita.jpg","strImageAttribution":"Cocktailmarler","strCreativeCommonsConfirmed":"Yes","dateModified":"2015-08-18 14:42:59"}"
// }