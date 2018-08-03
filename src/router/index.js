import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index.vue'
import Type from '@/pages/type/type.vue'
import NewType from '@/pages/type/add-type.vue'
import Typelist from '@/pages/type/typelist.vue'
import Detailslist from '@/pages/type/detailslist.vue'
import Detail from '@/pages/type/detail.vue'
import NewDetail from '@/pages/type/add-detail.vue'
import Layout from '@/pages/layout/index.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {path: '/login', component: Login},
        {
            path: '/', component: Layout, redirect: '/login',
            children: [
                {path: 'type', component: Type},
                {path: 'typeList', component: Typelist},
                {path: 'type/add_type', component: NewType},
                {path: 'detail/typeList', component: Detail},
                {path: 'detail/add_detail', component: NewDetail},
                {path: 'a_details',component:Detailslist}
            ]
        },
    ]
})
