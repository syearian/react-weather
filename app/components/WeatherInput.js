var React = require('react');

function WeatherInput (props) {
  return (
    <div className="form-group">
      <input
        className='form-control'
        onChange={props.onUpdateUser}
        placeholder='Dallas, TX'
        type='text'
        value={props.username} />
    </div>
  );
}

module.exports = WeatherInput;