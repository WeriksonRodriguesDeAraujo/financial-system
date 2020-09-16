import Dashboard from '../views/Dashboard.vue'
import Titulos from '../views/Titulos.vue'
import Login from '../views/Login.vue'
import NaturezaLancamento from '../views/NaturezaLancamento.vue'

const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      meta:{
          requiredAuth: true
      }
    },
    {
        path: '/titulos',
        name: 'Titulos',
        component: Titulos,
        title: 'Titulos',
        icon: 'mdi-cog',
        meta:{
            requiredAuth: true
        }
    },
    {
        path: '/natureza-lancamento',
        name: 'NaturezaLancamento',
        component: NaturezaLancamento,
        title: 'Natureza de Lançamento',
        icon: 'mdi-cog',
        meta:{
            requiredAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        icon: 'mdi-cog',
        meta:{
            requiredAuth: false
        }
    },
    
  ]
  export default routes