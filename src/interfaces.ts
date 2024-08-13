export interface ICocktail {
    alcoholic: boolean,
    category: string,
    glass: string,
    iba: string,
    id: string,
    image: string;
    ingredients: string[],
    instructions: string,
    measures: string[],
    name: string,
    thumbnail: string,
}

export interface IContext {
    goToInfoPage: (cocktail: ICocktail) => void;
}

export interface ISearch {
    name: string;
}