var React = require('react');
var PropTypes = React.PropTypes;

function DetailPreview (props) {
  return (
    <div>{props.day}</div>
  );
}

DetailPreview.propTypes = {
  
};

module.exports = DetailPreview;