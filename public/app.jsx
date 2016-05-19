/*
 *
 *  Presentational components dont maintain state (Render to the browser)
 *  Container components do maintain state (Maintain state and render children)
 */

/* PRESENTATIONAL COMPENENT
 *
 * -  Accesses two props that get passed to if from the parent and
 *    renders thems to the screen (and thats it)
 */
var GreeterMessage = React.createClass({
  // Anonymous inner function (doesnt take any parameters)
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
});
/* PRESENTATIONAL COMPENENT  - passed onNewName function */
var GreeterForm = React.createClass({
    // create onFormSubmit with event listener
    onFormSubmit: function (e) {
      e.preventDefault();

      var name = this.refs.name.value;

      if (name.length > 0) {
          this.refs.name.value = '';
          // function passed in from the parent
          this.props.onNewName(name);
      }
    },
    // Anonymous inner function (doesnt take any parameters)
    render: function () {
      return (
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name"/>
            <button>Set Name</button>
          </form>
      )
    }
});

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
      name: this.props.name
      // should be used to initialize, whereas
      // name: this.state.name
      // should be used to update
      //
      // NOTE: component cant update props, THEY CAN ONLY UPDATE STATE
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    // declare property var for use in JSX
    var name = this.state.name;
    var message = this.props.message;
    return (
      // can only return a single root HTML element/tag
      // curly braces used for props (properties of component)
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
