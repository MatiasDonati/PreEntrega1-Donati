import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import InputsColors from './components/InputsColors';
import ItemCount from './components/ItemCount';

function App() {

  const saludo = 'Bienvenidos a la Tienda!'

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={saludo} />
      <InputsColors />
      <Footer />
    </>
  );
}

export default App;