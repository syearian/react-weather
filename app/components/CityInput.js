var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function CityInput (props) {
  return (
    <form className={props.classes} onSubmit={props.onSubmitLocation}>
      <div className="form-group">
        <input
          className='form-control'
          onChange={props.onUpdateLocation}
          placeholder='Dallas, TX'
          type='text'
          value={props.location} />
      </div>
        <button type='submit' className='btn btn-success' style={props.style.button}>Get Weather</button>
    </form>
  );
}

CityInput.propTypes = {
  classes: PropTypes.string,
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  location: PropTypes.string,
  style: PropTypes.object
};

module.exports = CityInput;