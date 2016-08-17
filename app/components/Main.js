var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <h1>Weather App</h1>
        </header>
        <main className='main-container'>
          {this.props.children}
        </main>
      </div>
    )
  }
});

module.exports = Main;
