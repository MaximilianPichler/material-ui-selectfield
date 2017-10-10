import React from 'react'
import PropTypes from 'prop-types'
import DropDownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down'
import FloatingLabel from './FloatingLabel'

const objectShape = PropTypes.shape({
  value: PropTypes.any.isRequired,
  label: PropTypes.string
})

const styles = {
  div1: {
    position: 'relative',
    display: '-webkit-box',
    display: '-webkit-flex', // eslint-disable-line no-dupe-keys
    display: '-moz-box', // eslint-disable-line no-dupe-keys
    display: '-ms-flexbox', // eslint-disable-line no-dupe-keys
    display: '-o-flex', // eslint-disable-line no-dupe-keys
    display: 'flex', // eslint-disable-line no-dupe-keys
    WebkitBoxPack: 'end',
    WebkitJustifyContent: 'flex-end',
    msFlexPack: 'end',
    OJustifyContent: 'flex-end',
    justifyContent: 'flex-end',
    WebkitAlignItems: 'center',
    MozAlignItems: 'center',
    msAlignItems: 'center',
    OAlignItems: 'center',
    alignItems: 'center'
  },
  div2: {
    WebkitBoxFlex: 1,
    MozBoxFlex: 1,
    WebkitFlex: 1,
    msFlex: 1,
    OFlex: 1,
    flex: 1
  }
}

const SelectionsPresenter = ({
  selectedValues, selectionsRenderer,
  floatingLabel, hintText,
  muiTheme, floatingLabelStyle, floatingLabelFocusStyle,
  underlineStyle, underlineFocusStyle,
  isFocused, isOpen, disabled, errorText
}) => {
  const { textField: {floatingLabelColor, borderColor, focusColor} } = muiTheme

  // Condition for animating floating Label color and underline
  const focusCondition = isFocused || isOpen
  // Condition for shrinking the floating Label
  const shrinkCondition = (Array.isArray(selectedValues) && !!selectedValues.length) ||
  (!Array.isArray(selectedValues) && typeof selectedValues === 'object' && selectedValues != null) ||
  focusCondition

  const errorStyle = {borderColor: 'rgb(244,67,54)', borderWidth: 2}
  const disabledStyle = {borderBottom: '2px dotted'}

  const baseHRstyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    margin: 0,
    boxSizing: 'content-box',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid',
    borderColor,
    ...underlineStyle
  }

  const focusedHRstyle = disabled ? disabledStyle : (errorText ? errorStyle : {
    borderBottom: '2px solid',
    borderColor: (focusCondition) ? focusColor : borderColor,
    transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)', // transitions.easeOut(),
    transform: `scaleX( ${(focusCondition) ? 1 : 0} )`,
    ...underlineFocusStyle
  })

  return (
    <div>
      <div style={styles.div1}>
        <div style={styles.div2}>
          {
            floatingLabel &&
            <FloatingLabel
              shrink={shrinkCondition}
              focusCondition={focusCondition}
              disabled={disabled}
              defaultColors={{floatingLabelColor, focusColor}}
              floatingLabelStyle={{...floatingLabelStyle, pointerEvents: 'none'}}
              floatingLabelFocusStyle={floatingLabelFocusStyle}>
              {floatingLabel}
            </FloatingLabel>
          }
          {
            (shrinkCondition || !floatingLabel) &&
            selectionsRenderer(selectedValues, hintText, floatingLabelColor)
          }
        </div>
        <DropDownArrow style={{fill: borderColor}} />
        {
          !(focusCondition || errorText || disabled) &&
          <hr style={baseHRstyle} />
        }
        <hr style={{ ...baseHRstyle, ...focusedHRstyle }} />
      </div>
      {
        errorText &&
        <div style={{paddingTop: 5, fontSize: 12, color: 'rgb(244,67,54)'}}>
          {errorText}
        </div>
      }
    </div>
  )
}

SelectionsPresenter.propTypes = {
  value: PropTypes.oneOfType([
    objectShape,
    PropTypes.arrayOf(objectShape)
  ]),
  selectionsRenderer: PropTypes.func,
  hintText: PropTypes.string
}

SelectionsPresenter.defaultProps = {
  hintText: 'Click me',
  value: null,
  selectionsRenderer: (values, hintText, hintColor) => {
    const hintDiv = <div style={{color: hintColor}}>{hintText}</div>
    if (!values) return hintDiv
    const { value, label } = values
    if (Array.isArray(values)) {
      return values.length
      ? values.map(({ value, label }) => label || value).join(', ')
      : hintDiv
    }
    else if (label || value) return label || value
    else return hintDiv
  }
}

export default SelectionsPresenter
