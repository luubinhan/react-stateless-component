import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InputNumber.css';

class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateValue: props.defaultValue
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this._onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyPress);
  }

  _minus = event => {
    //update Value
    const { step } = this.props;
    const { stateValue } = this.state;
    const newValue = Number(stateValue) - Number(step);

    if (newValue >= this.props.min) {
      this.setState({ stateValue: newValue });
      this.props.onChange(event, newValue);
    }
  };

  _plus = event => {
    // update Value
    const { step } = this.props;
    const { stateValue } = this.state;
    const newValue = Number(step) + Number(stateValue);
    if (newValue <= this.props.max) {
      this.setState({ stateValue: newValue });
      this.props.onChange(event, newValue);
    }
  };

  _onKeyPress = (e) => {
    const key = e.keyCode ? e.keyCode : e.which;
    const {stateValue} = this.state;
    const {step} = this.props;
    // up key
    if (key === 38) {
      this.setState({ stateValue: stateValue + step });
      this.props.onChange(e, stateValue + step);
    } else if (key === 40) {
      // down key
      this.setState({ stateValue: stateValue - step });
      this.props.onChange(e, stateValue - step);
    }
  }

  _onChange = (e) => {
    const { value } = e.target;
    const { max, min } = this.props;
    if ((value < max) && (value > min)) {
      this.props.onChange(e, value);
      this.setState({
        stateValue: value
      });
    }
  }

  render() {
    const { className, min, max } = this.props;
    return (
      <div className={`input-number-block ${className}`}>
        <div
          className="input-number-decrement"
          onClick={this._minus}
          role="button"
          tabIndex="0"
          onKeyPress={this._onKeyPress}
        >
          –
        </div>
        <input
          className="input-number"
          type="number"
          value={this.state.stateValue}
          onChange={this._onChange}
          min={min}
          max={max}
        />
        <div
          className="input-number-increment"
          onClick={this._plus}
          role="button"
          tabIndex="0"
          onKeyPress={this._onKeyPress}
        >
          +
        </div>
      </div>
    );
  }
}

InputNumber.propTypes = {
  // css class
  className: PropTypes.string,

  // Min value
  min: PropTypes.number,

  // max value
  max: PropTypes.number,

  // step value
  step: PropTypes.number,

  // input value
  defaultValue: PropTypes.number,

  // function call after value has change
  onChange: PropTypes.func.isRequired
};

InputNumber.defaultProps = {
  className: '',
  defaultValue: 1,
  min: 1,
  max: 10,
  step: 1
};

export default InputNumber;
