import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktail } from "../getCocktail";
import { ICocktail } from "../interfaces";
import { CocktailInfo } from "../components/CocktailInfo";

export function CocktailInfoPage(): ReactElement {
    const [cocktail, setCocktail] = useState<ICocktail>({
        alcoholic: true,
        category: "",
        glass: "",
        iba: "",
        id: "",
        image: "",
        ingredients: [""],
        instructions: "",
        measures: [""],
        name: "",
        tags: "",
        thumbnail: ""
    });

    const params = useParams();

    useEffect(() => {
        if (params.id !== "cocktail-info") {
            console.log("params");
            console.log(params);
            getCocktail(params.id, "", false).then((cocktails) => setCocktail(cocktails[0]));
        }
    }, []);

    return <div>
        <CocktailInfo cocktail={cocktail}/>
    </div>
}
