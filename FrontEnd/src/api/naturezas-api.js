import axios from 'axios';
const URL = 'http://localhost:3000';


// Função obter que busca no backend no endpoint as naturezas de lançamento.
function obter(){

    // Aqui estyou criando um apromisse (Promessa que vou tentar obter as naturezas)
    return new Promise((resolve,  reject) => {
        axios.get(`${URL}/naturezas-lancamento`)
        .then(response => resolve(response)) // Cai aqui se tudo der certo
        .catch(error => reject(error));  // Cai aqui se tudo der errado.
    })
}

function cadastrar(natureza){
    
    return new Promise((resolve,  reject) => {
        axios.post(`${URL}/naturezas-lancamento`, natureza)
        .then(response => resolve(response)) 
        .catch(error => reject(error));
    })
}

function atualizar(natureza){
    
    return new Promise((resolve,  reject) => {
        axios.put(`${URL}/naturezas-lancamento/${natureza.id}`, natureza)
        .then(response => resolve(response)) 
        .catch(error => reject(error));
    })
}

function deletar(id){
    
    return new Promise((resolve,  reject) => {
        axios.delete(`${URL}/naturezas-lancamento/${id}`)
        .then(response => resolve(response)) 
        .catch(error => reject(error));
    })
}

export default {
    obter,
    cadastrar,
    atualizar,
    deletar
}