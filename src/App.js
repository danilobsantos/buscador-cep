import { FiSearch } from "react-icons/fi";
import './styles.css';


function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput"> 
        <input type="text" placeholder="Digite o CEP" />
        <button className="buttonSearch"><FiSearch size={25} color="#FFF"/></button>
      </div>

      <main className="main">
        <h2>CEP: 37832-742</h2>

        <span>Rua: Teste da Silva</span>
        <span>Complemento: Sem Complemento</span>
        <span>Bairro: Bairro dos bobos</span>
        <span>Campo Grande - MG</span>
        
      </main>
    </div>
    
  );
}

export default App;
