import { Outlet } from 'react-router-dom';
import './App.css'
import { Header } from './components';

export function App() {
  const context = {

  }

  return <div className="content">
    <Header/>
    <div className="body">
      <Outlet context={context}/>
    </div>
  </div>
}