// REACT COMPONENT (re-usable)
var Greeter = React.createClass({
  // provides default values if no properties are specifed
  getDefaultProps: function () {
    return {
      name: 'React'
    };
  },
  render: function() {
    // declare property var for use in JSX
    var name = this.props.name;
    return (
      // can only return a single root HTML element/tag
      // curly braces used for props (properties of component)
      <div>

        <h1>Hello {name}!</h1>
        <p>This is rendered from a component</p>
      </div>
    );
  }
});

var nameTwo = 'dfay';

// DOM (React component passed to DOM as first parameter)
ReactDOM.render(
  // properties are passed into components this way (ie: name="d-fay")
  // <Greeter name="d-fay"/>,
  // or in a modular way by passing in vars like this!
  <Greeter name={nameTwo}/>,
  document.getElementById('app')
);
