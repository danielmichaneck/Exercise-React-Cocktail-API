import { ReactElement, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header(): ReactElement {
    const location = useLocation();

    const linkClasses: string[] = [
        "header-link",
        "header-link",
        "header-link"
    ];

    const activeLinkClasses = "header-link header-link-active";

    switch(location.pathname) {
        case "/search-cocktail":
            linkClasses[1] = activeLinkClasses;
        break;
        case "/favorites":
            linkClasses[2] = activeLinkClasses;
        break;
        default:
            linkClasses[0] = activeLinkClasses;
        break;
    }

    return <div className="header">
        <nav className="header-content">
            <h1 className="header-title">Cocktails</h1>
            <Link className={linkClasses[0]} to="/">Home</Link>
            <Link className={linkClasses[1]} to="/search-cocktail">Search</Link>
            <Link className={linkClasses[2]} to="/favorites">Favorites</Link>
        </nav>
    </div>
}