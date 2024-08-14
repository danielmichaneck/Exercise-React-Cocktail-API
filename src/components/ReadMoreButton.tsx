import { ReactElement } from "react";
import { ICocktail } from "../interfaces";

interface ReadMoreButtonProps {
    cocktail: ICocktail;
    clickReadMore: (cocktail: ICocktail) => void;
}

export function ReadMoreButton({cocktail, clickReadMore}: ReadMoreButtonProps): ReactElement {
    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        clickReadMore(cocktail);
    }

    return <button className="button-template" onClick={handleOnClick}>Read more</button>;
}