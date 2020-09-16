<template>
  <v-app >
    <Menu/>

    <v-main>
      <v-container
      >
       <router-view/>
      </v-container>
    </v-main>


  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue';

  export default {
    props: {
      source: String,
    },
     components: {
      Menu
    },
    data: () => ({

    }),
    created () {
      
    },
  }
</script>

<style>
/* html{
  overflow-y: hidden;
} */
.v-btn.v-btn--contained, .v-btn.v-btn--outlined{
  text-transform: none;
  
}
.v-btn:not(.v-btn--round).v-size--default {
  min-width: 90px;
}


</style>