import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { getCocktail } from "../getCocktail";

interface CocktailProps {
    text: string;
}

export function Cocktail({text}: CocktailProps): ReactElement {
    return <p>{text}</p>;
}