import { createWebHistory, createRouter } from 'vue-router'
import AppPaymentView from '@/view/AppPaymentView'
import HeaderView from "@/view/HeaderView";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
          path: '/',
          name: 'Shop',
          component: HeaderView
        },
        {
            path: '/payment',
            name: 'payment',
            component: AppPaymentView
        }
    ]
})

export default router