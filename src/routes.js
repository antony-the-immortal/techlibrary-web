import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import(/* webpackChunkName: "Home" */ './components/Home.vue');
const Book = () => import(/* webpackChunkName: "Book" */ './components/Book.vue');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    {
      name: 'book_view',
      path: '/book/:id',
      params: { mode: 'view' },
      component: Book,
      props: true
    },
    {
      name: 'book_edit',
      path: '/book/:id',
      params: { mode: 'edit' },
      component: Book,
      props: true
    },
    {
      name: 'book_add',
      path: '/book/add',
      params: { mode: 'add' },
      component: Book,
      props: true
    }
  ]
});

export default router;