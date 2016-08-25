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
          day={props.forecast[0]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.forecast[1]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.forecast[2]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4 col-md-offset-2"
          day={props.forecast[3]}
          onClick={props.handleClickDetail}  />
        <DetailPreview
          className="col-sm-6 col-md-4"
          day={props.forecast[4]}
          onClick={props.handleClickDetail} />
      </div>
    </section>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool,
  location: PropTypes.string,
  handleClickDetail: PropTypes.func,
  forecast: PropTypes.array
};

module.exports = Forecast;
