import { useNavigate, Outlet } from 'react-router-dom';
import { Header } from './components';
import { ICocktail, ICocktailContext } from './interfaces';
import { useState } from 'react';

import "./css/"

export function App() {
  const [selectedCocktail, setSelectedCocktail] = useState<ICocktail>();

  const navigate = useNavigate();

  const goToInfoPage = (cocktail: ICocktail) => {
    if (cocktail !== undefined) {
      setSelectedCocktail(cocktail);
      navigate("/cocktail-info/" + cocktail.id);
    }
  }

  const context: ICocktailContext = {
    selectedCocktail: selectedCocktail!, 
    goToInfoPage: goToInfoPage
  }

  return <div className="app">
    <Header/>
    <div className="content">
      <Outlet context={context}/>
    </div>
  </div>
}
