import { ReactElement } from "react";
import { ICocktail } from "../interfaces";

interface AddFavoriteButtonProps {
    cocktailID: string;
    text: string;
    clickAddFavorite: (id: string) => void;
}

export function AddFavoriteButton({cocktailID, text, clickAddFavorite}: AddFavoriteButtonProps): ReactElement {
    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        clickAddFavorite(cocktailID);
    }

    return <button className="button-template" onClick={handleOnClick}>{text}</button>;
}