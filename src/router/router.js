import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import AddPostPage from '../views/AddPostPage.vue';
import HomePage from '../views/HomePage.vue';
import SignupPage from '../views/SignupPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/addpost',
    component: AddPostPage,
    meta: {
      title: "Add Post"
    }
  },
  {
    path: '/signup',
    component: SignupPage,
    meta: {
      title: "Sign up"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;