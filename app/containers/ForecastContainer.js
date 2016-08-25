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
      forecast: []
    }
  },
  componentDidMount: function() {
    weatherHelpers.getForecast(this.state.location)
      .then(function (data) {
        this.setState({
          isLoading: false,
          location: weatherHelpers.formatLocation(this.state.location),
          forecast: data.data.list
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  },
  handleClickDetail: function(dayForecast) {
    this.context.router.push({
      pathname: '/detail/' + this.state.location,
      state: {
        dayForecast: dayForecast
      }
    })
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
        location={this.state.location}
        handleClickDetail={this.handleClickDetail} />
    );
  }
});

module.exports = ForecastContainer;