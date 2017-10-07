import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ControlPanel from '@/components/ControlPanel'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/admin',
      name: 'Control Panel',
      component: ControlPanel,
      children: [
        {
          path: '',
        }
      ]
    }
  ],
});
