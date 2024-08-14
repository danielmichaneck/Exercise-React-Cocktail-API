import { useOutletContext } from "react-router-dom";
import { ICocktailContext } from "../interfaces";

export function useCocktailContext(): ICocktailContext {
    return useOutletContext<ICocktailContext>();
}