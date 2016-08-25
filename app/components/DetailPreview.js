var React = require('react');
var PropTypes = React.PropTypes;

function DetailPreview (props) {
  return (
    <div className={props.className}>
      <h3>{props.day}</h3>
      <p>{console.log(props.weather)}</p>
      <p>{props.weather.weather[0].main}</p>
      <p>Temp: {props.weather.temp.max}/{props.weather.temp.min}</p>
    </div>
  );
}

DetailPreview.propTypes = {
  className: PropTypes.string,
  day: PropTypes.string,
  weather: PropTypes.object
};

module.exports = DetailPreview;