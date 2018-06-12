import React from 'react';
import asyncLoad from 'direct-core/asyncLoad';

import Index from 'Page/Index';

const LearningSystem = asyncLoad( () => import('Page/LearningSystem') );
const Login = asyncLoad( () => import('Page/Login') );
const SignUp = asyncLoad( () => import('Page/SignUp') );
const Learning = asyncLoad( () => import('Page/Learning') );
const UITest = asyncLoad( () => import('Page/UITest') );
const NotFound = asyncLoad( () => import('Page/NotFound') );

const nested = true;
export default {
  "/": {
    page: Index,
  },
  "/learning": {
    page: Learning,
    nested
  },
  "/learningsystem": {
    page: LearningSystem,
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
  "/404": {
    page: NotFound
  },
  "*": {
    redirect: "/404"
  }
}
