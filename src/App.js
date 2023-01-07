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
import ItemList from './components/fromFireBase/ItemList';
import Formulario from './components/Formulario';
import Login from './components/Login';
import Register from './components/Register';
import EditItemsAdmin from './components/EditItemsAdmin';
import { RutaProtejida } from './components/RutaProtegida';
import { useAuth } from './context/AuthContext';
import MensajeAdmin from './components/MensajeAdmin';

function App() {

  const { user } = useAuth()

  const saludo = 'Bienvenidxs!'

  return (
    <BrowserRouter>
      <NavBar />
      {user && <MensajeAdmin />}
      <Routes >
        {/* <Route path='/' element={<Inicio />} /> */}
        <Route path='/' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:id' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Formulario />} />
        <Route path='/category/obracompleta' element={<ObraCompleta />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit-items-admin' element={
          <RutaProtejida>
            <EditItemsAdmin />
          </RutaProtejida>
        }
        />
        {/* FIREBASE */}
        <Route path='/itemFireBase' element={<ItemList />} />
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