var React = require('react');

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

module.exports = GreeterForm;
