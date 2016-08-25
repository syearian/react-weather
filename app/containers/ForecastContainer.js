var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      location: this.props.routeParams.city,
      days: []
    }
  },
  componentDidMount: function() {
    weatherHelpers.getForecast(this.state.location)
      .then(function (data) {
        console.log(data);
        this.setState({
          isLoading: false,
          days: data.data.list
        });
        console.log(this.state.days);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weather={this.state.days} />
    );
  }
});

module.exports = ForecastContainer;