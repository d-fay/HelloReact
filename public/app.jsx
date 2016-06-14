/*
 *
 *  Presentational components dont maintain state (Render to the browser)
 *  Container components do maintain state (Maintain state and render children)
 */
var React = require('react');
var ReactDOM = require('react-dom');

// no extention necessary because JSX is supported in webpack.config
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm');

/* CONTAINER COMPONENT - maintains state for the application (name attribute)
 * - When state gets upsated it updates its childeren
 * - So if the state gets a new name the greeter message
 *   is going to re-render because it relies on the name state.
 */
var Greeter = React.createClass({
  // provides default values if no properties are specifed
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a backup/default message prop'
    };
  },
  getInitialState: function () {
    return {
      // STATE IS INTERNALLY MAINTAINED AND UPDATED BY THE COMPONENT
      // PROPS GET PASSED INTO A COMPONENT AS YOU INITIALIZE IT
      name: this.props.name,
      message: this.props.message
      // should be used to initialize, whereas
      // name: this.state.name
      // should be used to update
      //
      // NOTE: component cant update props, THEY CAN ONLY UPDATE STATE
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function() {
    // declare property var for use in JSX
    var name = this.state.name;
    var message = this.state.message;
    return (
      // can only return a single root HTML element/tag
      // curly braces used for props (properties of component)
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

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
