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
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.weather[0]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.weather[1]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.weather[2]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4 col-md-offset-2"
          day={props.weather[3]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.weather[4]}
          onClick={props.handleClickDetail} />
      </div>
    </section>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool,
  location: PropTypes.string,
  handleClickDetail: PropTypes.func,
  weather: PropTypes.array
};

module.exports = Forecast;
