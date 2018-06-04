import React from 'react';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import style from 'style';

import makePage from 'direct-core/makePage';

import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import Fade from 'Animation/Fade';

class NotFoundPage extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      play1: false,
      play2: false
    };
  }

  showGoBack = () => {
    this.setState({
      play2: true
    })
  }

  showNotFound = () => {
    this.setState({
      play1: true
    });
  }

  render(){
    const { match , history , location , ined } = this.props;
    return (
      <div>
      <div className="account-pages"></div>
     <div className="clearfix"></div>
     <div className="wrapper-page">
         <div className="ex-page-content text-center">
             <div className="text-error">404</div>
             <h3 className="text-uppercase font-600">Page not Found</h3>
             <p className="text-muted">
                 It's looking like you may have taken a wrong turn. Don't worry... it happens to
                 the best of us. You might want to check your internet connection. Here's a little tip that might
                 help you get back on track.
             </p>
             <br/>
             <a className="btn btn-success waves-effect waves-light" //href="index.html"
                href = "/"
               > Return Home</a>

         </div>
     </div>



   {/* <script>
         var resizefunc = [];
     </script>


     <script src="assets/js/jquery.min.js"></script>
     <script src="assets/js/bootstrap.min.js"></script>
     <script src="assets/js/detect.js"></script>
     <script src="assets/js/fastclick.js"></script>
     <script src="assets/js/jquery.slimscroll.js"></script>
     <script src="assets/js/jquery.blockUI.js"></script>
     <script src="assets/js/waves.js"></script>
     <script src="assets/js/wow.min.js"></script>
     <script src="assets/js/jquery.nicescroll.js"></script>
     <script src="assets/js/jquery.scrollTo.min.js"></script>


     <script src="assets/js/jquery.core.js"></script>
     <script src="assets/js/jquery.app.js"></script> */}
      {/* <div classNameName={style.container}>
        <div classNameName={style.goBackContainer}>
          <SlideDU play={this.state.play2}>
            <Button
              onClick={history.goBack}
              text="<-go back"
            />
          </SlideDU>
        </div>
        <div classNameName={style.numberContainer}>
          <SlideLR play={ined} onEntered={this.showNotFound}>
            <div classNameName={style.number}>
              404
            </div>
          </SlideLR>
        </div>
        <div classNameName={style.textContainer}>
            <Fade play={this.state.play1} onEntered={this.showGoBack}>
              <div classNameName={style.text}>
                Not Found
              </div>
            </Fade>
        </div>
      </div> */}
    </div>
    );
  }
};

export default makePage( NotFoundPage );
