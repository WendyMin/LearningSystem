import React from 'react';
import { Route , Switch , Link } from 'react-router';
import { connect } from 'react-redux';

import asyncLoad from 'direct-core/asyncLoad';

const EnglishLearning = asyncLoad( () => import( 'EnglishLearning' ) );
const EngTest = asyncLoad( () => import( 'EnglishLearning/EngTest' ) );
const YueDu = asyncLoad( () => import( 'EnglishLearning/YueDu' ) );
const ChtoEng = asyncLoad( () => import( 'EnglishLearning/ChtoEng' ) );
const Shengcinanju = asyncLoad( () => import( 'EnglishLearning/Shengcinanju' ) );
const EngReview = asyncLoad( () => import( 'EnglishLearning/EngReview' ) );
const EngChart = asyncLoad( () => import( 'EnglishLearning/EngChart' ) );
const LogicLearning = asyncLoad( () => import( 'LogicLearning' ) );
const Knowledge = asyncLoad( () => import( 'LogicLearning/Knowledge' ) );
const ZhongDian = asyncLoad( () => import( 'LogicLearning/ZhongDian' ) );
const WritingLearning = asyncLoad( () => import('WritingLearning') );
// const LunZheng = asyncLoad( () => import( 'WritingLearning/LunZheng' ) );
// const LunShuo = asyncLoad( () => import( 'WritingLearning/LunShuo' ) );
const NotFound = asyncLoad( () => import( 'Page/NotFound' ) );

class Learning extends React.PureComponent {
    render(){
      const { match } = this.props;
      return (
        <React.Fragment>
          <Switch>
            <Route exact path={`${match.url}/english`} component={EnglishLearning} />
            <Route exact path={`${match.url}/english/engtest`} component={EngTest} />
            <Route exact path={`${match.url}/english/yuedu`} component={YueDu} />
            <Route exact path={`${match.url}/english/chtoeng`} component={ChtoEng} />
            <Route exact path={`${match.url}/english/shengcinanju`} component={Shengcinanju} />
            <Route exact path={`${match.url}/english/engreview`} component={EngReview} />
            <Route exact path={`${match.url}/english/engchart`} component={EngChart} />
            <Route exact path={`${match.url}/logic`} component={LogicLearning} />
            <Route exact path={`${match.url}/logic/knowledge`} component={Knowledge} />
            <Route exact path={`${match.url}/logic/zhongdian`} component={ZhongDian} />
            <Route exact path={`${match.url}/writing`} component={WritingLearning} />
            {/* <Route exact path={`${match.url}/writing/lunshuo`} component={LunShuo} /> */}
            {/* <Route exact path={`${match.url}/writing/lunzheng`} component={LunZheng} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      );
    }
};

export default Learning;
