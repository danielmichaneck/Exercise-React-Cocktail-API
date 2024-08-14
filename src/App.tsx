import { useNavigate, Outlet } from 'react-router-dom';
import { Header } from './components';
import { ICocktail, ICocktailContext } from './interfaces';
import { useState } from 'react';

import "./css/App.css"

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

  return <div className="content">
    <Header/>
    <div className="body">
      <Outlet context={context}/>
    </div>
  </div>
}
