// REACT COMPONENT (re-usable)
var Greeter = React.createClass({
  render: function() {
    return (
      // can only return a single root HTML element/tag
      <div>
        <h1>Hello React!</h1>
        <p>This is rendered from a component</p>
      </div>
    );
  }
});

// DOM (React component passed to DOM as first parameter)
ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
