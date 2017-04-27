import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

const routes = [ 
  { path: '/', component: Login },
  { path: '/about', component: About },
  { path: '/login', component: Login },
]

export default routes