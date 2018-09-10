import {
  LOGIN,
  GET_USER_INFO,
  __SET_USER
} from 'actionTypes';

export const setUser = ( username , logined ) => ({
  type: __SET_USER,
  payload: {
    username,
    logined
  }
});

const getUserInfoStart = () => ({
  type: GET_USER_INFO.pending,
  payload: {

  }
});

const getUserInfoSucceed = ( username , userid ) => ({
  type: GET_USER_INFO.resolved,
  payload: {
    username,
    userid
  }
});

const getUserInfoFailed = ( reason ) => ({
    type: GET_USER_INFO.rejected,
    payload: {
      reason
    }
});

let reqNum1 = 0;
var username = "";
var logined = "";
export const getUserInfo = () => ( dispatch ) => {
  // dispatch( getUserInfoStart() );
  // const reqId1 = ++reqNum1;
  // const dispatchNewest = action => {
  //   if( reqId1 === reqNum1 ){
  //     dispatch( action );
  //   }
  // }

  $.ajax({
    type:"get",
    url:'http://www.doxue.com/app/get_user',
    dataType:"jsonp",
    success:function(json){
      console.log(json),
      // console.log(json.data.uid),
      // console.log(json.data.uname);
      dispatch( getUserInfoSucceed( json.data.uname , json.data.uid ) )
      console.log(username,logined,username == undefined && logined == 0 );
    },
    error:function(){
      console.log('error');
    }
  })
  console.log(username)

  dispatch( getUserInfoSucceed( "2017" ) )



  // fetch( 'http://www.doxue.com/app/get_user' , {
  //   headers: {
  //   //   'Content-Type': 'application/json',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Access-Control-Allow-Origin':'true'
  //   // Access-Control-Allow-Headers:"Content-Type",
  //   },
  //   method: 'GET',
  //   dataType:'jsonp'
  //   // body: JSON.stringify({
  //   //   username,
  //   //   password
  //   // })
  // })
  // .then( response => {
  //   if( !response.ok ){
  //     throw new Error(" response not ok with:" + response.status );
  //   }
  //   response.json()
  //   .then( json => dispatchNewest( getUserInfoSucceed( json ) ) )
  //   .catch( err => {
  //     console.log( "json parse err:" + err );
  //     dispatchNewest( getUserInfoFailed( "json" ) );
  //   })
  // })
  // .catch( err => {
  //   console.log( "network err:" + err );
  //   dispatchNewest( getUserInfoFailed( "network" ) );
  // });
}

const startLogin = ({ username , password }) => ({
  type: LOGIN.pending,
  payload: {
    username,
    password
  }
});

const loginSucceed = ( response ) => ({
  type: LOGIN.resolved,
  payload: {
    response
  }
});

const loginFailed = ( reason ) => ({
    type: LOGIN.rejected,
    payload: {
      reason
    }
});

let reqNum = 0;
export const login = ({ username , password }) => ( dispatch ) => {
  dispatch( startLogin({ username , password }) );
  const reqId = ++reqNum;
  const dispatchNewest = action => {
    if( reqId === reqNum ){
      dispatch( action );
    }
  }

  fetch( '/api/login' , {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  })
  .then( response => {
    if( !response.ok ){
      throw new Error(" response not ok with:" + response.status );
    }
    response.json()
    .then( json => dispatchNewest( loginSucceed( json ) ) )
    .catch( err => {
      console.log( "json parse err:" + err );
      dispatchNewest( loginFailed( "json" ) );
    })
  })
  .catch( err => {
    console.log( "network err:" + err );
    dispatchNewest( loginFailed( "network" ) );
  });
}
