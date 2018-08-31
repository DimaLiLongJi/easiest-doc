// import { Router } from 'easiest';
import { Router, TRouter } from '../../../InDiv/src';

const router = new Router();


const routes: TRouter[] = [
    {
        path: '/',
        redirectTo: '/introduction',
        component: 'root-component',
        children: [
            {
                path: '/introduction',
                component: 'introduction-container',
            },
            {
                path: '/architecture',
                component: 'architecture-container',
            },
            {
                path: '/docs',
                redirectTo: '/docs/component',
                component: 'docs-container',
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
        ],
    },
];
router.setRootPath('/indiv-doc');
router.init(routes);
router.routeChange = (old: string, next: string) => {
    // console.log('$routeChange', old, next);
};

export default router;
