class NaturezaModel {
    constructor(obj){
        obj = obj || {};

        this.id = obj.id;
        this.codigo = obj.codigo;
        this.nome = obj.nome;
        this.tipo = obj.tipo;
        this.status = (!obj.status) ? false : true;
        this.classificacao = obj.classificacao;
    }

    modeloValido(){
        return !!(this.codigo && this.nome && this.tipo);
    }

}
export default NaturezaModel;