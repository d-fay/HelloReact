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
    // create onFormSubmit handler with event listener
    // ---builds 'updates' object, passes it to greeter component.
    onFormSubmit: function (e) {
      e.preventDefault();

      var updates = {};
      var name = this.refs.name.value;
      var message = this.refs.message.value;


      if (name.length > 0) {
        this.refs.name.value = '';
        // function passed in from the parent
        updates.name = name;
      }
      if (message.length > 0) {
        this.refs.message.value = '';
        updates.message = message;
      }
      //passes updates {} to greeter component
      this.props.onNewData(updates);
    },
    // Anonymous inner function (doesnt take any parameters)
    render: function () {
      return (
          <form onSubmit={this.onFormSubmit}>
            <div>
              <input type="text" ref="name" placeholder="Enter name"/>
            </div>
            <div>
              <textarea ref="message" placeholder="Enter message"></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
      );
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
