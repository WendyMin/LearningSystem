import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link , Route } from 'react-router-dom';

import makePage from 'direct-core/makePage';

import Button from 'UI/Button';

class IndexPage extends React.Component {
  constructor( props ){
    super( props );
  }

  render(){
    const { alert , openModal } = this.props;
    return (
      <React.Fragment>

        <Link to="/learning/english">英语学习 </Link>
        <br/>
        <Link to="/learning/logic">逻辑学习</Link>
        <br/>
        <Link to="/learning/writing">写作学习</Link>
        <br/>
        <Link to="/ui">ui测试</Link>
        <br/>
        <Link to="/learningsystem">主页面</Link>
        <br/>
        <Link to="/login">登录页面</Link>
        <br/>
        <Link to="/nowhere">nowhere</Link>

      </React.Fragment>
    );
  }

};

export default makePage( IndexPage );
