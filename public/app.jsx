/*
 *
 *  Presentational components dont maintain state (Render to the browser)
 *  Container components do maintain state (Maintain state and render children)
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./componens/Greeter');

// prop vars to pass to DOM
var nameProp = 'stranger';

// DOM (React component passed to DOM as first parameter)
ReactDOM.render(
  // properties are passed into components this way (ie: name="d-fay")
  // <Greeter name="d-fay"/>,
  // or in a modular way by passing in vars like this!
  <Greeter name={nameProp}/>,
  document.getElementById('app')
);
