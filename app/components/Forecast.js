var React = require('react');
var PropTypes = React.PropTypes;
var DetailPreview = require('./DetailPreview');

function Forecast (props) {
  return (
    <div>
      <h2>5 Day Forecast</h2>
      <DetailPreview day='Day One' />
      <DetailPreview day='Day Two' />
      <DetailPreview day='Day Three' />
      <DetailPreview day='Day Four' />
      <DetailPreview day='Day Five' />
    </div>
  );
}

Forecast.propTypes = {
  
};

module.exports = Forecast;
