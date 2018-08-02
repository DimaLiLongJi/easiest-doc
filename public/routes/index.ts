import { Router } from 'easiest';

const router = new Router();


const routes = [
    {
        path: '/',
        component: 'root-component',
        children: [
            {
                path: '/introduction',
                component: 'introduction-container',
            },
        ],
    },
];
router.$setRootPath('/easiest-doc');
router.$init(routes);
router.$routeChange = function (old: string, next: string) {
    console.log('$routeChange', old, next);
};

export default router;
