var React = require('react');
var PropTypes = React.PropTypes;
var DetailPreview = require('./DetailPreview');

function Forecast (props) {
  return (
    <div>
      <h2>5 Day Forecast</h2>
      <DetailPreview day='Day One' weather={props.weather[0]} />
      <DetailPreview day='Day Two' weather={props.weather[1]} />
      <DetailPreview day='Day Three' weather={props.weather[2]} />
      <DetailPreview day='Day Four' weather={props.weather[3]} />
      <DetailPreview day='Day Five' weather={props.weather[4]} />
    </div>
  );
}

Forecast.propTypes = {
  weather: PropTypes.array
};

module.exports = Forecast;
