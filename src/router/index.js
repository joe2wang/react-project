import IndexComp from '../App'


export const routes = [
    { path: '/',
      component: IndexComp,
      indexRoute: { component:IndexComp },
      childRoutes: [
        { path: 'about', component:IndexComp }
        // { path: 'inbox',
        //   component: App,
        //   childRoutes: [
        //     { path: '/messages/:id', component: App },
        //     { path: 'messages/:id',
        //       onEnter: function (nextState, replaceState) {
        //         replaceState(null, '/messages/' + nextState.params.id)
        //       }
        //     }
        //   ]
        // }
      ]
    }
  ]