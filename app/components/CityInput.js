var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function CityInput (props) {
  return (
    <form className={props.className} onSubmit={props.onSumbitLocation}>
      <div className="form-group">
        <input
          className='form-control'
          onChange={props.onUpdatelocation}
          placeholder='Dallas, TX'
          type='text'
          value={props.location} />
      </div>
      <Link to='/forecast'>
        <button type='submit' className='btn btn-success'
          style={props.style.button}>Get Weather</button>
      </Link>
    </form>
  );
}

CityInput.propTypes = {
  className: PropTypes.string,
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  style: PropTypes.object
};

module.exports = CityInput;