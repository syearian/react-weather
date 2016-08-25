var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      location: this.props.routeParams.city
    }
  },
  componentDidMount: function() {
    weatherHelpers.getForecast(this.state.location)
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  render: function() {
    return (
      <Forecast />
    );
  }
});

module.exports = ForecastContainer;