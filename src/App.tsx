import { useNavigate, Outlet } from 'react-router-dom';
import { Header } from './components';
import { ICocktail, ICocktailContext } from './interfaces';
import { useState } from 'react';

import "./css/"

export function App() {
  const [selectedCocktail, setSelectedCocktail] = useState<ICocktail>();

  const navigate = useNavigate();

  const addFavorite = (id: string) => {
    const favorites: string | null = localStorage.getItem("favorites");
    if (favorites !== null) {
      if (favorites.split(",").find((favorite) => favorite === id) === undefined) {
        console.log("Adding to favorites: " + id)
        localStorage.setItem("favorites", favorites + "," + id);
      }
      else {
        console.log("That item is already saved in your favorites!")
      }
    }
    else {
      console.log("You don't have any favorites saved, setting the first item to: " + id);
      localStorage.setItem("favorites", id);
    }
  }

  const goToInfoPage = (cocktail: ICocktail) => {
    if (cocktail !== undefined) {
      setSelectedCocktail(cocktail);
      navigate("/cocktail-info/" + cocktail.id);
    }
  }

  const context: ICocktailContext = {
    selectedCocktail: selectedCocktail!, 
    addFavorite: addFavorite,
    goToInfoPage: goToInfoPage
  }

  return <div className="app">
    <Header/>
    <div className="content">
      <Outlet context={context}/>
    </div>
  </div>
}
