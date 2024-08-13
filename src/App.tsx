import { Outlet } from 'react-router-dom';
import './App.css'
import { Header } from './components';
import { ICocktail } from './interfaces';
import { useState } from 'react';

export function App() {
  const [selectedCocktail, setSelectedCocktail] = useState<ICocktail>();

  const context = {

  }

  return <div className="content">
    <Header/>
    <div className="body">
      <Outlet context={context}/>
    </div>
  </div>
}