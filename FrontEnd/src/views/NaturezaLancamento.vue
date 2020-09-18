<template>
  <div>
    <v-row>
      <v-col>
        <v-card width="100%">
          <v-card-title>
           
            <v-btn @click="adicinarNatureza()" color="primary" dark>Adicionar natureza</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquise"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table calculate-widths :headers="colunas" :items="naturezas" :search="search">
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editarItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deletarItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="850px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ (natureza.id) ? 'Editar' : 'Adicionar' }} natureza</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <!--  aqui são os campos da natureza. -->
              <v-row>
                <v-col cols="12" sm="12" md="2">
                  <v-text-field label="Codigo" v-model="natureza.codigo"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="5">
                  <v-text-field label="Nome" v-model="natureza.nome"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                  <v-text-field label="Classificação" v-model="natureza.classificacao"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="2">
                  <v-select :items="['DEBITO', 'CREDITO']" label="Tipo" v-model="natureza.tipo"></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="salvar()">Salvar</v-btn>
            <v-btn color="primary" outlined dark @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import apiNatureza from "../api/naturezas-api";
import NaturezaModel from '../models/natureza-model';

export default {
  data() {
    return {
      search: "",
      colunas: [
        { text: "Código", value: "codigo" },
        { text: "Nome", value: "nome" },
        { text: "Tipo", value: "tipo" },
        { text: "Classificação", value: "classificacao" },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      naturezas: [],
      dialog: false,
      natureza: new NaturezaModel()
    };
  },

  created() {
    apiNatureza
      .obter()
      .then((resposta) => {
        this.naturezas = resposta.data.map(n => new NaturezaModel(n));
      })
      .catch((error) => {
        console.log(error);
        alert("Deu ruim na hora de obter as naturezas...");
      });
  },

  methods:{
    
    adicinarNatureza(){
      this.natureza = new NaturezaModel();
      this.dialog = true;
    },
    
    salvar(){

      this.natureza.status = true;

      if(!this.natureza.modeloValido()){
        alert('Favor preencher os campos código, nome e tipo.');
        return;
      }

      if(this.natureza.id){
        apiNatureza.atualizar(this.natureza)
        .then(() => {
          alert(`Natureza ${this.natureza.nome} foi atualizada com sucesso!`)
          this.atualizarNaturezaDaTabela(this.natureza);
          this.dialog = false;
        })
        .catch(erro => {
          console.log(erro);
          alert('Não foi possivel cadastrar a natureza de lançamento.')
        })
      }else {
          apiNatureza.cadastrar(this.natureza)
          .then( response => {
            alert(`Natureza ${this.natureza.nome} foi cadastrada com sucesso!`);
            this.naturezas.push(new NaturezaModel(response.data));
            this.dialog = false;
          })
          .catch(error => {
            console.log(error);
            alert('Não foi possivel cadastrar a natureza de lançamento')
          })
        }
    },

    deletarItem(item) {

      if(confirm('Você realmente deseja deletar está natureza ?')){
        
        apiNatureza.deletar(item.id)
        .then(() => {
          alert('Natureza deletada com sucesso !')
          this.removerNaturezaDaTabela(item);
        })
        .catch(error => {
          console.log(error);
          alert('Não foi possivel deletar a natureza')
        })
      }
    },

    removerNaturezaDaTabela(natureza){
      var index = this.naturezas.map(n => n.id).indexOf(natureza.id)

      this.naturezas.splice(index, 1);
    },

    atualizarNaturezaDaTabela(natureza){
      var index = this.naturezas.map(n => n.id).indexOf(natureza.id)

      this.naturezas.splice(index, 1, natureza);
    },
    
    editarItem(item) {
      this.natureza = new NaturezaModel(item);
      this.dialog = true;
    } 
  }
};
</script>

<style scoped>
</style>
