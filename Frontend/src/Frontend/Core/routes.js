import React from 'react';
import asyncLoad from 'direct-core/asyncLoad';

import Index from 'Page/Index';

const Login = asyncLoad( () => import('Page/Login') );
const SignUp = asyncLoad( () => import('Page/SignUp') );
const Learning = asyncLoad( () => import('Page/Learning') );
const UITest = asyncLoad( () => import('Page/UITest') );
const NotFound = asyncLoad( () => import('Page/NotFound') );
const Manage = asyncLoad( () => import('Page/Manage') );

const nested = true;
export default {
  "/": {
    page: Index,
  },
  "/learning": {
    page: Learning,
    nested
  },
  "/login": {
    page: Login,
  },
  "/signup": {
    page: SignUp,
  },
  "/ui": {
    page: UITest
  },
  "/manage": {
    page: Manage
  },
  "/404": {
    page: NotFound
  },
  "*": {
    redirect: "/404"
  }
}
