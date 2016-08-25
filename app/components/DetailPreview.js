var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/utils');

function DetailPreview (props) {
  var date = utils.getDate(props.day.dt);
  var high = Math.round(props.day.temp.max);
  return (
    <div className={props.className}>
      <h4>{date}</h4>
      <p>{console.log(props.day)}</p>
      <p>{props.day.weather[0].main}</p>
      <p>High: {high}</p>
    </div>
  );
}

DetailPreview.propTypes = {
  className: PropTypes.string,
  day: PropTypes.object
};

module.exports = DetailPreview;