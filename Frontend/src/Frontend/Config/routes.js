import React from 'react';
import asyncLoad from 'direct-core/asyncLoad';

import Index from 'Page/Index';

const LearningSystem = asyncLoad( () => import('Page/LearningSystem') );
const Login = asyncLoad( () => import('Page/Login') );
const Learning = asyncLoad( () => import('Page/Learning') );
const UITest = asyncLoad( () => import('Page/UITest') );
const NotFound = asyncLoad( () => import('Page/NotFound') );

const exact = true;
export default {
  "/": {
    page: Index,
    exact
  },
  "/learning": {
    page: Learning
  },
  "/learningsystem": {
    page: LearningSystem
  },
  "/loginOrSignup": {
    page: Login,
    exact
  },
  "/ui": {
    page: UITest,
    exact
  },
  "*": {
    page: NotFound
  }
}
