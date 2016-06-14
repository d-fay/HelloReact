// this is a hidden module contained in ./components/

var React = require('react');
// no extention necessary because JSX is supported in webpack.config
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter;
