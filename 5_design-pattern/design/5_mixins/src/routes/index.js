import Vue from 'vue';
import VueRouter from 'vue-router';
// 일반 컴포넌트
import UserList from '../components/UserList.vue';
import TodoList from '../components/TodoList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/user',
    },
    {
      path: '/user',
      name: 'user',
      component: UserList,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList,
    },
  ],
})