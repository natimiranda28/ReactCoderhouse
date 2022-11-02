import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer mensaje="Natalia Miranda"/>
    </div>
  );
}
export default App;
