import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import CharList from './components/rickandmorty/CharList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharDetail from './components/rickandmorty/CharDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ObraCompleta from './components/ObraCompleta';
import Bio from './components/Bio';
import Category from './components/Category';
import Inicio from './components/Inicio';
import Eventos from './components/Eventos';
import React, { useState } from 'react';
import Cart from './components/Cart';


function App() {

  const saludo = 'Bienvenidxs!'

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        {/* <Route path='/' element={<Inicio />} /> */}
        <Route path='/' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:id' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/checkout' element={'FORMULARIO DE COMPRA'} />
        <Route path='/category/obracompleta' element={<ObraCompleta />} />
        {/* Tests */}
        <Route path='/rick' element={<CharList />} />
        <Route path='/rick/:charId' element={<CharDetail />} />
        <Route path='/eventos' element={<Eventos />} />
        {/* Tests */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;