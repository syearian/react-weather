var React = require('react');
var PropTypes = React.PropTypes;
var DetailPreview = require('./DetailPreview');
var Loading = require('./Loading');

function Forecast (props) {
  return props.isLoading === true
  ? <Loading />
  : <section className="text-center">
      <div>
        <h2>5 Day Forecast</h2>
        <h3>{props.location}</h3>
      </div>
      <div className="row">
        <DetailPreview className="col-sm-6 col-md-4" day='Day One' weather={props.weather[0]} />
        <DetailPreview className="col-sm-6 col-md-4" day='Day Two' weather={props.weather[1]} />
        <DetailPreview className="col-sm-6 col-md-4" day='Day Three' weather={props.weather[2]} />
        <DetailPreview className="col-sm-6 col-md-4 col-md-offset-2" day='Day Four' weather={props.weather[3]} />
        <DetailPreview className="col-sm-6 col-md-4" day='Day Five' weather={props.weather[4]} />
      </div>
    </section>
  ;
}

Forecast.propTypes = {
  isLoading: PropTypes.bool,
  location: PropTypes.string,
  weather: PropTypes.array
};

module.exports = Forecast;
