import {
  __LOAD_DID_TEST,
  __LOAD_LEARN_ALL,
} from 'actionTypes';


let loadDidTestCounter = 0;
const loadDidTestStart = () => ({
    type: __LOAD_DID_TEST.pending,
    payload: {

    },
    id: loadDidTestCounter
});
const loadDidTestResolved = ( response , initState ) => ({
    type: __LOAD_DID_TEST.resolved,
    payload: {
      response,
      initState
    },
    id: loadDidTestCounter
});
const loadDidTestRejected = ( reason , detail ) => ({
    type: __LOAD_DID_TEST.rejected,
    payload: {
      reason,
      detail
    },
    id: loadDidTestCounter
});

export const loadDidTest = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadDidTestCounter;
  const dispatchLastest = action => {
    if( reqId === loadDidTestCounter ){
      dispatch( action );
    }
  }
  dispatch( loadDidTestStart() );
  if( typeof body === "object" ){
    body = JSON.stringify( body );
  }
  fetch( url , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body
  })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( loadDidTestRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( loadDidTestResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadDidTestRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( loadDidTestRejected( "network" , err ) );
  });
};







let loadLearnAllCounter = 0;
const loadLearnAllStart = () => ({
    type: __LOAD_LEARN_ALL.pending,
    payload: {

    },
    id: loadLearnAllCounter
});
const loadLearnAllResolved = ( response , initState ) => ({
    type: __LOAD_LEARN_ALL.resolved,
    payload: {
      response,
      initState
    },
    id: loadLearnAllCounter
});
const loadLearnAllRejected = ( reason , detail ) => ({
    type: __LOAD_LEARN_ALL.rejected,
    payload: {
      reason,
      detail
    },
    id: loadLearnAllCounter
});

export const loadLearnAll = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadLearnAllCounter;
  const dispatchLastest = action => {
    if( reqId === loadLearnAllCounter ){
      dispatch( action );
    }
  }
  dispatch( loadLearnAllStart() );
  if( typeof body === "object" ){
    body = JSON.stringify( body );
  }
  fetch( url , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body
  })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( loadLearnAllRejected( "server" , response.status ) );
      return;
    }
    response.json()
    //.then( json => dispatchLastest( loadTestQuestionsResolved( parser( json ) , initState ) ) )
    .then( json => dispatchLastest( loadLearnAllResolved( json  , initState ) ) )
    .catch( err => {
      dispatchLastest( loadLearnAllRejected( "json" , err ) )
    });
  })
  .catch( err => {
      dispatchLastest( loadLearnAllRejected( "network" , err ) );
  });
};
