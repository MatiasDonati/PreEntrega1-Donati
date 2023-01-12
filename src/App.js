import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import React, { useState } from 'react';
import Cart from './components/Cart';
import Formulario from './components/Formulario';
import Login from './components/Login';
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
        <Route path='/' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:id' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Formulario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/edit-items-admin' element={
          <RutaProtejida>
            <EditItemsAdmin />
          </RutaProtejida>
        }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;