import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import ContentList from '../views/ContentList.vue'
import Content from '../views/Content.vue'
import FavList from '../views/FavList.vue'
import Setting from '../views/Setting.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/contentList', component: ContentList },
  { path: '/content', component: Content },
  { path: '/favList', component: FavList },
  { path: '/setting', component: Setting },
  { path: '/about', component: About },
  { path: '/Index', component: Index },
]

export default routes