import { NvModule } from '@indiv/core';
import { TRouter, RouteModule } from '@indiv/router';

const routes: TRouter[] = [
    {
        path: '/',
        redirectTo: '/introduction',
        component: 'root-component',
        children: [
            {
                path: '/introduction',
                loadChild: () => import(/* webpackChunkName: "introduction" */ '../modules/introduction.module').then(mod => mod.default),
            },
            {
                path: '/architecture',
                loadChild: () => import(/* webpackChunkName: "architecture" */ '../modules/architecture.module').then(mod => mod.ArchitectureModule),
            },
            {
                path: '/docs',
                redirectTo: '/docs/component',
                loadChild: () => import(/* webpackChunkName: "docs" */ '../modules/docs.module').then(mod => mod.DocsModule),
                children: [
                    {
                        path: '/component',
                        component: 'docs-component-container',
                    },
                    {
                        path: '/template',
                        component: 'docs-template-container',
                        routeCanActive: () => true
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
                loadChild: () => import(/* webpackChunkName: "ssr" */ '../modules/ssr.module').then(mod => mod.SSRModule),
            },
            {
                path: '/middleware',
                loadChild: () => import(/* webpackChunkName: "middleware" */ '../modules/middleware.module').then(mod => mod.default),
            },
        ],
    },
];

@NvModule({
    imports: [
        RouteModule.forRoot({
            rootPath: '/indiv-doc',
            routes,
            routeChange: (old: string, next: string) => {
                console.log('$routeChange', old, next);
            },
        }),
    ],
    exports: [
        RouteModule,
    ],
})
export default class RouterModule { }
