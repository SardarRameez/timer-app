import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';
import Button from '@material-ui/core/Button';

const TimerButton = ({ buttonAction, buttonValue }) => (
  <Button variant="contained" color="primary" className="button-container" onClick={() => buttonAction()}>
    <p className="button-value">{buttonValue}</p>
  </Button>
);


TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
  className:PropTypes.string
};

export default TimerButton;