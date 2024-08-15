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
    tags: string,
    thumbnail: string,
}

export interface ICocktailContext {
    selectedCocktail: ICocktail;
    addFavorite: (id: string) => void;
    goToInfoPage: (cocktail: ICocktail) => void;
}

export interface ISearch {
    name: string;
}