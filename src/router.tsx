import { createBrowserRouter, useParams } from "react-router-dom";
import { CocktailInfoPage, HomePage, SearchPage } from "./pages";
import { App } from "./App";
import { FavoritesPage } from "./pages/FavoritesPage";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            // Homepage
            { path: "/",
              element: <HomePage /> },
            // Search page
            { path: "/search-cocktail",
              element: <SearchPage /> },
            // Info page
            { path: "/cocktail-info?/:id",
              element: <CocktailInfoPage/> },
            // Info page
            { path: "/favorites",
              element: <FavoritesPage/> }
        ]
    }
]);