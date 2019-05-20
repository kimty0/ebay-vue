import Vue from 'vue';
import VueRouter from 'vue-router';
// 일반 컴포넌트
import UserList from '../components/UserList.vue';
import TodoList from '../components/TodoList.vue';
// HOC 컴포넌트
import FetchList from '../components/FetchList.js'; 

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
      // component: UserList,
      component: FetchList(UserList, 'https://jsonplaceholder.typicode.com/users/'),
    },
    {
      path: '/todo',
      // component: TodoList,
      component: FetchList(TodoList, 'https://jsonplaceholder.typicode.com/todos/'),
    },
  ],
})