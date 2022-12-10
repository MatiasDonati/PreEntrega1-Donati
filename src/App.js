import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import InputsColors from './components/InputsColors';
import CharList from './components/rickandmorty/CharList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import Item from './components/Item';
import CharDetail from './components/rickandmorty/CharDetail';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  const saludo = 'Bienvenidos a la Tienda!'

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path='/' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/rick' element={<CharList />} />
        <Route path='/rick/:charId' element={<CharDetail />} />
        <Route path='/colors' element={<InputsColors />} />
        <Route path='/cart' element={'CARRITO'} />
        <Route path='/checkout' element={'FORMULARIO DE COMPRA'} />
        <Route path='/ilustraciones/' element={'ILUSTRACIONES'} />
        <Route path='/ilustraciones/:id' element={<ItemDetailContainer />} />
        <Route path='/pinturas' element={'PINTURAS'} />
        <Route path='/pinturas/:id' element={'DETALLE DE PINTURAS'} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;