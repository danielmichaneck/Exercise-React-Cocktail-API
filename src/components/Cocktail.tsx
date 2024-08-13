import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { getCocktail } from "../getCocktail";


import '../css/Cocktail.css'

interface CocktailProps {
    thumbnail: string;
    text: string;
}

export function Cocktail(props: CocktailProps): ReactElement {
    return <div className="cocktail-card">
        <figure className="cocktail-figure">
            <img src={props.thumbnail} className="cocktail-image"></img>
        </figure>
        <p className="cocktail-name">{props.text}</p>
    </div>;
}
