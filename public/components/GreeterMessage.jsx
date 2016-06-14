var React = require('react');

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

module.exports = GreeterMessage; // similar to a return statement
