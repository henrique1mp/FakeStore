import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '080'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c1f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'af4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a54'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '94c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '05e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a11'),
    routes: [
      {
        path: '/docs/Cart/AddCart',
        component: ComponentCreator('/docs/Cart/AddCart', '566'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/DeleteCart',
        component: ComponentCreator('/docs/Cart/DeleteCart', '45b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/GetAll',
        component: ComponentCreator('/docs/Cart/GetAll', 'd4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/GetDateRange',
        component: ComponentCreator('/docs/Cart/GetDateRange', '873'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/GetSingle',
        component: ComponentCreator('/docs/Cart/GetSingle', '42f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/GetUserCart',
        component: ComponentCreator('/docs/Cart/GetUserCart', '304'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/LimitResults',
        component: ComponentCreator('/docs/Cart/LimitResults', '0b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/SortResults',
        component: ComponentCreator('/docs/Cart/SortResults', 'cf1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Cart/UpdateCart',
        component: ComponentCreator('/docs/Cart/UpdateCart', 'efa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/cart',
        component: ComponentCreator('/docs/category/cart', '999'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/login',
        component: ComponentCreator('/docs/category/login', '0f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/products',
        component: ComponentCreator('/docs/category/products', 'bb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/user',
        component: ComponentCreator('/docs/category/user', '10c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Login/userlogin',
        component: ComponentCreator('/docs/Login/userlogin', 'ad5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/AddNewProduct',
        component: ComponentCreator('/docs/Products/AddNewProduct', '814'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/Delete',
        component: ComponentCreator('/docs/Products/Delete', '23e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/GetAllCategories',
        component: ComponentCreator('/docs/Products/GetAllCategories', '6f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/GetAllProducts',
        component: ComponentCreator('/docs/Products/GetAllProducts', '00b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/GetInCategory',
        component: ComponentCreator('/docs/Products/GetInCategory', '465'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/GetSingleProduct',
        component: ComponentCreator('/docs/Products/GetSingleProduct', 'c74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/LimitResults',
        component: ComponentCreator('/docs/Products/LimitResults', 'c2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/SortResults',
        component: ComponentCreator('/docs/Products/SortResults', 'f85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Products/Update',
        component: ComponentCreator('/docs/Products/Update', '161'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/Add',
        component: ComponentCreator('/docs/User/Add', '200'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/Delete',
        component: ComponentCreator('/docs/User/Delete', '9a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/GetAllUsers',
        component: ComponentCreator('/docs/User/GetAllUsers', '8b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/GetSingleUser',
        component: ComponentCreator('/docs/User/GetSingleUser', '773'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/LimitResults',
        component: ComponentCreator('/docs/User/LimitResults', '6a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/SortResults',
        component: ComponentCreator('/docs/User/SortResults', '02c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/User/Update',
        component: ComponentCreator('/docs/User/Update', 'eac'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '219'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
