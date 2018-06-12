import React from 'react';

class SignUp extends React.PureComponent {
  render(){
    return(
      <div>
      <div className="account-pages"></div>
      <div className="clearfix"></div>
      <div className="wrapper-page">
          <div className="text-center">
              <a href="index.html" className="logo"><span>Learning<span>System</span></span></a>
              <h5 className="text-muted m-t-0 font-600">Welcome to the learningsystem</h5>
          </div>
        <div className="m-t-40 card-box">
              <div className="text-center">
                  <h4 className="text-uppercase font-bold m-b-0">Register</h4>
              </div>
              <div className="panel-body">
                  <form className="form-horizontal m-t-20" action="index.html">

          <div className="form-group ">
            <div className="col-xs-12">
              <input className="form-control" type="email" required="" placeholder="Email"/>
            </div>
          </div>

          <div className="form-group ">
            <div className="col-xs-12">
              <input className="form-control" type="text" required="" placeholder="Username"/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-12">
              <input className="form-control" type="password" required="" placeholder="Password"/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-12">
              <div className="checkbox checkbox-custom">
                <input id="checkbox-signup" type="checkbox" checked="checked"/>
                <label for="checkbox-signup">I accept <a href="#">Terms and Conditions</a></label>
              </div>
            </div>
          </div>

          <div className="form-group text-center m-t-40">
            <div className="col-xs-12">
              <button className="btn btn-custom btn-bordred btn-block waves-effect waves-light" type="submit">
                Register
              </button>
            </div>
          </div>

        </form>

              </div>
          </div>
          {/* <!-- end card-box --> */}

      <div className="row">
      <div className="col-sm-12 text-center">
        <p className="text-muted">Already have account?<a href="/login" className="text-primary m-l-5"><b>Sign In</b></a></p>
      </div>
      </div>

      </div>
      {/* <!-- end wrapper page --> */}
    </div>
    )
  }

}

export default SignUp;
