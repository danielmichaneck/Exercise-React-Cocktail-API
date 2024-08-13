import { createBrowserRouter } from "react-router-dom";
import { CocktailInfoPage, HomePage, SearchPage } from "./pages";
import { App } from "./App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "search-cocktail", element: <SearchPage /> },
            { path: "cocktail-info", element: <CocktailInfoPage /> }
        ]
    }
])