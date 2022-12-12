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


function App() {

  const saludo = 'Bienvenidxs!'

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path='/' element={<Inicio />} />
        <Route path='/category/:id' element={<ItemListContainer greeting={saludo} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='//category' element={<Category />} />
        <Route path='/category/obracompleta' element={<ObraCompleta />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/cart' element={'CARRITO'} />
        <Route path='/checkout' element={'FORMULARIO DE COMPRA'} />
        {/* Tests */}
        <Route path='/rick' element={<CharList />} />
        <Route path='/rick/:charId' element={<CharDetail />} />
        {/* Tests */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;