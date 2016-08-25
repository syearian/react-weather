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
        this.setState({
          isLoading: false,
          location: weatherHelpers.formatLocation(this.state.location),
          days: data.data.list
        });
        console.log(this.state.days);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  },
  handleClickDetail: function(event) {
    this.context.router.push({
      pathname: '/detail/' + this.state.location,
      state: {
        location: this.state.location,
        day: this.state.days
      }
  })
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        weather={this.state.days}
        location={this.state.location}
        handleClickDetail={this.handleClickDetail} />
    );
  }
});

module.exports = ForecastContainer;