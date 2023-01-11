import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Componentes/Header/Header.js';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      
    <BrowserRouter>
      
      <Header /> 
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="*" element={ <Navigate to={"/"}/>} />
        <Route path="/detail/:itemId"element={<ItemDetailContainer />} />
      </Routes>
    
    </BrowserRouter>
      
      
  );
}

export default App;
