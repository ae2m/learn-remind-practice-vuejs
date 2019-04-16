import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList'
import EventShow from './views/EventShow'
import EventCreate from './views/EventCreate'
import User from './views/User'
import UserProp from './views/UserProp'
import EventCard from './components/EventCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      props: true,
      name: 'event-show',
      component: EventShow
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User
    },
    {
      path: '/props/:usernameProp',
      props: true,
      name: 'user-prop',
      component: UserProp
    },
    {
      path: '/ex-component',
      name: 'ex-component',
      component: EventCard
    }
  ]
})
