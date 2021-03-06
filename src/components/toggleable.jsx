import React, { Component, PropTypes } from 'react';


/**
 * A base component that can be toggled on or off.
 *
 * The derived class should render the actual representation of the component,
 * including the toggle state.
 */
export default class Toggleable extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: 'toggleable',
    checked: false
  };

  render() {
    const { className } = this.props;

    return <div className={className}>
      {this._render()}
    </div>;
  }

  onToggle = () => {
    const { onToggle, checked } = this.props;

    onToggle({ checked: !checked });
  }
}
