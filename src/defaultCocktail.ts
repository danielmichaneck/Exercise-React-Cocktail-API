import { ICocktail } from "./interfaces";

export function defaultCocktail(): ICocktail {
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