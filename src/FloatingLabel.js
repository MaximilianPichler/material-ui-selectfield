import React, { Component } from 'react'

class FloatingLabel extends Component {
  state = { flabelHeight: 0 }

  componentDidMount () {
    this.setState({ flabelHeight: this.flabel.offsetHeight })
  }

  render () {
    const {
      children, shrink, focusCondition, /* disabled, */
      defaultColors: {floatingLabelColor, focusColor},
      floatingLabelStyle, floatingLabelFocusStyle
    } = this.props
    const defaultStyles = {
      position: 'static',
      top: 0,
      lineHeight: '22px',
      zIndex: 1, // Needed to display label above Chrome's autocomplete field background
      transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)', // transitions.easeOut(),
      transform: 'scale(1) translateY(0)',
      transformOrigin: 'left top',
      pointerEvents: 'auto',
      userSelect: 'none',
      color: floatingLabelColor,
      ...floatingLabelStyle
    }

    const focusStyles = focusCondition &&
      {
        color: focusColor,
        ...floatingLabelFocusStyle
      }

    const shrinkStyles = shrink &&
      {
        position: 'absolute',
        transform: `scale(0.75) translateY(-${this.state.flabelHeight}px)`,
        pointerEvents: 'none'
      }

    return (
      <label ref={ref => (this.flabel = ref)} style={{ ...defaultStyles, ...shrinkStyles, ...focusStyles }}>
        {children}
      </label>
    )
  }
}

FloatingLabel.defaultProps = {
  disabled: false,
  shrink: false
}

export default FloatingLabel
