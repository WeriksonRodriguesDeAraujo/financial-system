
const { naturezas } = require('../database/naturezas-lancamento-mock');
const { NaturezaLancamentoModel } = require('../models/natureza-lancamento-model');

module.exports = {
    obterTodos() {
       return naturezas;
    },

    adicionar(objNatureza){
        var natureza = new NaturezaLancamentoModel(objNatureza);
        natureza.id = naturezas.length + 1;

        naturezas.push(natureza);
        return natureza;
    },

    editar(objNatureza){
        var natureza = new NaturezaLancamentoModel(objNatureza);
        var index = naturezas.map(n => n.id).indexOf(natureza.id);

        naturezas.splice(index,1, natureza);
        return naturezas.filter(n => n.id == natureza.id)[0];
    },

    deletar(id){
        var index = naturezas.map(n => n.id).indexOf(id);
        if(index < 0){
            return false;
        }
        naturezas.splice(index,1);
        return true;
    }
}