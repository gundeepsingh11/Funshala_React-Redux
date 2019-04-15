// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';

// //2 defining function reducer and returning the state
// //5 adding params to reducer funtion, it have 2 params,
// //  1 Initial State
// //  2 Action
// function reducer(state, action) {
//   // see what is my action type
//   // console.log(action);
//   if (action.type === 'changeStore') {
//     return action.payload.newState;
//   }
//   return 'State';
// }

// //1  creating store and passing reducer
// const store = createStore(reducer);
// // console.log(store.getState());

// //3 dispaching action, it contains type of action and the optional field payload which will contain the new or updated data
// const action = {
//   type: 'changeStore',
//   payload: {
//     newState: 'New State',
//   },
// };

// //4 dispaching the new action to the store
// store.dispatch(action);

// console.log(store.getState());

// ReactDOM.render(<p>hello</p>, document.getElementById('root'));
// -------------------------------------------------// -------------------------------------------------

// -------------------------------------------------// -------------------------------------------------
// 2nd part
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { combineReducers, createStore } from 'redux';

// function productsReducer(state = [], action) {
//   return state;
// }

// function userReducers(state = '', action) {
//   switch (action.type) {
//     case 'updateUser':
//       return action.payload;
//   }

//   return state;
// }

// const allReducers = combineReducers({
//   products: productsReducer,
//   user: userReducers,
// });

// const store = createStore(
//   allReducers,
//   window.devToolsExtension && window.devToolsExtension(),
// );

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'Gundeep',
//   },
// };

// store.dispatch(updateUserAction);

// ReactDOM.render(<p>hello</p>, document.getElementById('root'));

// -------------------------------------------------// -------------------------------------------------

// -------------------------------------------------// -------------------------------------------------
// 3rd part

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import productsReducer from './reducers/products-reducer';
import userReducers from './reducers/user-reducer';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducers,
});

const store = createStore(
  allReducers,
  window.devToolsExtension && window.devToolsExtension(),
);

ReactDOM.render(
  <Provider store={store}>
    <App aRandownProp="randown prop" />
  </Provider>,
  document.getElementById('root'),
);
