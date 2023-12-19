import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import AddPostPage from '../views/AddPostPage.vue';
import HomePage from '../views/HomePage.vue';
import SignupPage from '../views/SignupPage.vue';
import ContactPage from '../views/ContactPage.vue';
import aPost from '../views/aPost.vue';
import { authenticateUser } from '../authenticate';

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
      title: "Login",
      showLogout: false
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
      title: "Sign up",
      showLogout: false
    }
  },
  {
    path: '/contact',
    component: ContactPage,
    meta: {
      title: "Contact"
    }
  },
  {
    path: '/post/:id',
    component: aPost,
    meta: {
      title: "a Post"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async(to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  if (to.meta.requiresAuth) {
    try {
        await authenticateUser(); 
        next();
    } catch (error) {
        next('/login');
    }
} else {
    next();
}  
});

export default router;