import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    linkActiveClass:'is-active',
    routes: [
        {
            path: '/',
            redirect: '/quality'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/quality',
                    component: resolve => require(['../components/page/QualityDashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    // component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/doc',
                    component: resolve => require(['../components/page/Doc.vue'], resolve),
                    meta: {title: '参考文档'}
                },
                {
                    path: '/data/apply',
                    component: resolve => require(['../components/page/data/microservice/apply/ApplyHome'], resolve),
                    children: [
                        {
                            path: '/house/add',
                            component: resolve => require(['../components/page/data/microservice/apply/AddHouse'], resolve),
                            meta:{title: '添加房源'}
                        },
                        {
                            path: '/pointsale/add',
                            component: resolve => require(['../components/page/data/microservice/apply/AddPointSale'], resolve),
                            meta:{title: '销售顾问'}
                        },
                        {
                            path: '/bank/add',
                            component: resolve => require(['../components/page/data/microservice/apply/AddBankInfo'], resolve),
                            meta:{title: '还款账户'}
                        },
                        {
                            path: '/customer/add',
                            component: resolve => require(['../components/page/data/microservice/apply/AddCustomer'], resolve),
                            meta:{title: '添加客户'}
                        },
                        {
                            path: '/',
                            redirect: '/house/add'
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
