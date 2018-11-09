// import { Router, TRouter } from 'indiv';
import { Router, TRouter } from '../../../InDiv/src';
// import { Router, TRouter } from '../../../InDiv/build';

const router = new Router();


const routes: TRouter[] = [
    {
        path: '/',
        redirectTo: '/introduction',
        component: 'root-component',
        children: [
            {
                path: '/introduction',
                // component: 'introduction-container',
                loadChild: () => import('../modules/introduction.module'),
            },
            {
                path: '/architecture',
                // component: 'architecture-container',
                loadChild: () => import('../modules/architecture.module'),
            },
            {
                path: '/docs',
                redirectTo: '/docs/component',
                // component: 'docs-container',
                loadChild: () => import('../modules/docs.module'),
                children: [
                    {
                        path: '/component',
                        component: 'docs-component-container',
                    },
                    {
                        path: '/template',
                        component: 'docs-template-container',
                    },
                    {
                        path: '/service',
                        component: 'docs-service-container',
                    },
                    {
                        path: '/module',
                        component: 'docs-module-container',
                    },
                    {
                        path: '/route',
                        component: 'docs-route-container',
                    },
                    {
                        path: '/indiv',
                        component: 'docs-indiv-container',
                    },
                    {
                        path: '/libs',
                        component: 'docs-libs-container',
                    },
                    {
                        path: '/http',
                        component: 'docs-http-container',
                    },
                ],
            },
            {
                path: '/ssr',
                // component: 'ssr-container',
                loadChild: () => import('../modules/ssr.module'),
            },
            {
                path: '/middleware',
                // component: 'middleware-container',
                loadChild: () => import('../modules/middleware.module'),
            },
        ],
    },
];
router.setRootPath('/indiv-doc');
router.init(routes);
router.routeChange = (old: string, next: string) => {
    // console.log('$routeChange', old, next);
};

export default router;
