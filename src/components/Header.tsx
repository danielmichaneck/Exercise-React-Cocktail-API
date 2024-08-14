import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
    return <div>
        <h1>Cocktails</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/search-cocktail">Search</Link>
        </nav>
    </div>
}