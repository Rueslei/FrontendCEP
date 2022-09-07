import { useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState ({});

  async function handleSearch(){
    //49100000/json/
    if(input === ''){
      alert("Preencha com o CEP")
      return;
    }
    try{
      //const response = await api.get(`CepResponse?cepInformado=${input}`)
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
      console.log(response)
    }catch{
      alert("Algo errado não está certo.")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className='main'>

        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} {cep.estado} </span>

      </main>

      )}
      
    </div>
  );
}

export default App;
