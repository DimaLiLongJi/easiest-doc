// import { Router } from 'easiest';
import { Router } from '../../../easiest/src';

const router = new Router();


const routes = [
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
                ],
            },
        ],
    },
];
router.setRootPath('/easiest-doc');
router.init(routes);
router.routeChange = function (old: string, next: string) {
    console.log('$routeChange', old, next);
};

export default router;
