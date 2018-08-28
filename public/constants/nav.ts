export const navs = [
    {
        name: '介绍',
        to: '/introduction',
    },
    {
        name: '构架',
        to: '/architecture',
    },
    {
        name: '文档',
        to: '/docs',
        child: [
            {
                name: '组件',
                to: '/docs/component',
            },
            {
                name: '模板语法',
                to: '/docs/template',
            },
            {
                name: '模块',
                to: '/docs/module',
            },
        ],
    },
];
