<template>
  <div>
    <!-- Menu lateral -->
    <v-navigation-drawer v-model="drawer" app clipped>

      <v-list dense>

        <v-list-item color="primary" :to="rota.path" v-for="rota in listaDeRotas" :key="rota.name" link > 

          <v-list-item-action>
            <v-icon>{{ rota.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title> {{ rota.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <!-- Menu superior, ou barra de navegação -->
    <v-app-bar  app clipped-left>
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="primary" >Financial System </v-toolbar-title>
    </v-app-bar>

  </div>
</template>

<script>
import routes from '@/router/routes.js';

export default {
    props: {
      source: String,
    },

    data() { 
      return {
          drawer: null,
          listaDeRotas: [],
      }   
    },

    created(){
        this.listaDeRotas = routes;
    }
};
</script>