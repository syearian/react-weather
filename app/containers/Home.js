var React = require('react');
var CityInput = require('../components/CityInput');
var weatherHelpers = require('../utils/weatherHelpers');

var styles = {
  section: {
    height: '100vh',
    background: 'url("images/pattern.svg")'
  },
  divFormContainer: {
    maxWidth: '60%'
  },
  h2: {
    color: '#fff'
  },
  input: {

  },
  form: {
    button: {
      margin: '0 auto'
    }
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
  handleSubmitLocation: function(event) {
    event.preventDefault;
    this.context.router.push('/forecast/' + this.state.location)
  },
  handleUpdateLocation: function(event) {
    this.setState({
      location: event.target.value
    });
  },
  render: function() {
    return (
      <section className="jumbotron col-sm-12 text-center" style={styles.section}>
        <h2 style={styles.h2}>Enter a City and Country Code</h2>
        <div className="row">
          <CityInput 
            classes='col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4'
            onSubmitLocation={this.handleSubmitLocation}
            onUpdateLocation={this.handleUpdateLocation}
            location={this.state.location}
            style={styles.form}
          />
        </div>	
      </section>
    );
  }
});

module.exports = Home;