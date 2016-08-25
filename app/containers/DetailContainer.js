var React = require('react');
var Detail = require('../components/Detail');
var weatherHelpers = require('../utils/weatherHelpers');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <Detail
        dayForecast={this.props.location.state.dayForecast}
        location={this.props.routeParams.city} />
    );
  }
});

module.exports = DetailContainer;