// REACT COMPONENT (re-usable)
var Greeter = React.createClass({
  // provides default values if no properties are specifed
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'This is a backup/default message prop'
    };
  },
  getInitialState: function () {
    return {
      // STATE IS INTERNALLY MAINTAINED AND UPDATED BY THE COMPONENT
      // PROPS GET PASSED INTO A COMPONENT AS YOU INITIALIZE IT
      name: this.props.name
      // should be used to initialize, whereas
      // name: this.state.name
      // should be used to update
      //
      // NOTE: component cant update props, THEY CAN ONLY UPDATE STATE
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
    // see refs in Greeter tag
    var name = this.refs.name.value;
    // clear the input text field
    this.refs.name.value = '';

    if (typeof name === 'string' && name.length > 0) {
      // set the var name to name value
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    // declare property var for use in JSX
    var name = this.state.name;
    var message = this.props.msg;
    return (
      // can only return a single root HTML element/tag
      // curly braces used for props (properties of component)
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

      </div>
    );
  }
});
// prop vars to pass to DOM
var nameProp = 'stranger';
var msgProp = 'This message param is passed as a prop'

// DOM (React component passed to DOM as first parameter)
ReactDOM.render(
  // properties are passed into components this way (ie: name="d-fay")
  // <Greeter name="d-fay"/>,
  // or in a modular way by passing in vars like this!
  <Greeter name={nameProp} msg={msgProp}/>,
  document.getElementById('app')
);
