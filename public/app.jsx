// REACT COMPONENT (re-usable)
var Greeter = React.createClass({
  // provides default values if no properties are specifed
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'This is a backup/default message prop'
    };
  },
  render: function() {
    // declare property var for use in JSX
    var name = this.props.name;
    var message = this.props.msg;
    return (
      // can only return a single root HTML element/tag
      // curly braces used for props (properties of component)
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
      </div>
    );
  }
});
// prop vars to pass to DOM
var nameProp = 'dfay';
var msgProp = 'This message param is passed as a prop'

// DOM (React component passed to DOM as first parameter)
ReactDOM.render(
  // properties are passed into components this way (ie: name="d-fay")
  // <Greeter name="d-fay"/>,
  // or in a modular way by passing in vars like this!
  <Greeter name={nameProp} msg={msgProp}/>,
  document.getElementById('app')
);
