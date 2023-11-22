import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import AddPostPage from '../views/AddPostPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/addpost', component: AddPostPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;