var React = require('react');
var CityInput = require('../components/CityInput');

var styles = {
  section: {
    height: '100vh',
    background: 'url("images/pattern.svg")'
  },
  h2: {
    color: '#fff'
  },
  input: {

  },
  form: {
    
  }
}

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      location: ''
    }
  },
  handleSubmitLocation: function() {
    console.log('submit');
  },
  handleUpdateLocation: function() {
    console.log('update');
  },
  render: function() {
    return (
      <section className="jumbotron col-sm-12 text-center" style={styles.section}>
        <h2 style={styles.h2}>Enter a City and State</h2>
        <CityInput 
          className=''
          onSubmitLocation={this.handleSubmitLocation}
          onUpdateLocation={this.handleUpdateLocation}
          location={this.state.location}
          style={this.styles.form}
        />	
      </section>
    );
  }
});

module.exports = Home;