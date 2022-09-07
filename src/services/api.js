import axios from "axios";      

const api = axios.create({
   // baseURL: "https://localhost:7046/"
    baseURL: "https://viacep.com.br/ws/"
})

//https://viacep.com.br/ws/01001000/json/
//https://localhost:7046/CepResponse?cepInformado=49100000
export default api;