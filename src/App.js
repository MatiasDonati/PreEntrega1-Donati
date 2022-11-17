import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import InputsColors from './components/InputsColors';

function App() {

  const saludo = 'Bienvenidos a la Tienda!'

  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
        <ItemListContainer greeting={saludo}/>
        <br />
        <h1 className="text-3xl font-bold underline">Elegí tu Color</h1>
        <br />
        <InputsColors />
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;