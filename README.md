# material-ui-selectfield

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


[build-badge]: https://img.shields.io/travis/MaximilianPichler/material-ui-selectfield/master.png?style=flat-square
[build]: https://travis-ci.org/MaximilianPichler/material-ui-selectfield.svg?branch=master

[npm-badge]: https://img.shields.io/npm/v/material-ui-selectfield.png?style=flat-square
[npm]: https://www.npmjs.com/package/material-ui-selectfield


## Demo
[demo]: https://maximilianpichler.github.io/material-ui-selectfield/


## Installation
`npm i -S material-ui-selectfield`  


## Properties
| Name             | Type          | Default    | Description |
|:----             |:----          |:----       |:---- |
| name | string | | Required to differentiate between multiple instances of superSelectField in same page. |
| floatingLabel | string or node | | The content to use for the floating label element. |
| hintText | string | 'Click me' | Placeholder text for the main selections display. |
| hintTextAutocomplete | string | 'Type something' | Placeholder text for the autocomplete. |
| errorText | string | | Include this property to show an error text. |
| noMatchFound | string | 'No match found' | Placeholder text when the autocomplete filter fails. |
| anchorOrigin | object | `{ vertical: 'top', horizontal: 'left' }` | Anchor position of the menu, accepted values: `top, bottom / left, right` |
| checkPosition | string |  | Position of the checkmark in multiple mode. Accepted values: `'', left, right` |
| canAutoPosition | bool | true | If present, this property allows the inner Popover component to position the menu in such way options are not hidden by the screen edges. |
| multiple | bool | false | Include this property to turn superSelectField into a multi-selection dropdown. Checkboxes will appear.|
| open | bool | false | Include this property to make the dropdown stay always open.|
| disabled | bool | false | Include this property to disable superSelectField.|
| value | null, object, object[] | null | Selected value(s).<br>/!\ REQUIRED: each object must expose a 'value' property. |
| onChange | function | () => {} | Triggers when selecting/unselecting an option from the Menu.<br>signature: (selectedValues, name) with `selectedValues` array of selected values based on selected nodes' value property, and `name` the value of the superSelectField instance's name property |
| onAutoCompleteTyping | function | () => {} | Exposes the word typed in AutoComplete. Useful for triggering onType API requests. |
| children | any | [] | Datasource is an array of any type of nodes, styled at your convenience.<br>/!\ REQUIRED: each node must expose a `value` property. This value property will be used by default for both option's value and label.<br>A `label` property can be provided to specify a different value than `value`. |
| nb2show | number | 5 | Number of options displayed from the menu. |
| elementHeight | number, number[] | 36 | Height in pixels of each option element. If elements have different heights, you can provide them in an array. |
| showAutocompleteThreshold | number | 10 | Maximum number of options from which to display the autocomplete search field.<br> For example, if autoComplete textfield need to be disabled, just set this prop with a value higher than children length. |
| autocompleteFilter | function | see below | Provide your own filtering parser. Default: case insensitive.<br>The search field will appear only if there are more than 10 children (see `showAutocompleteThreshold`).<br>By default, the parser will check for `label` props, 'value' otherwise. |
| useLayerForClickAway | bool | false | If true, the popover dropdown will render on top of an invisible layer, which will prevent clicks to the underlying elements, and trigger an `onRequestClose('clickAway')` call. |

#### Styling properties
| Name             | Type          | Default    | Description |
|:----             |:----          |:----       |:---- |
| style | object | {} | Insert your own inlined styles, applied to the root component. |
| menuStyle | object | {} | Styles applied to the comtainer which will receive your children components. |
| menuGroupStyle | object | {} | Styles applied to the MenuItems hosting your \<optgroup/>. |
| innerDivStyle | object | {} | Styles applied to the inner div of MenuItems hosting each of your children components. |
| menuFooterStyle | object | {} | Styles applied to the Menu's footer. |
| menuCloseButton | node |  | A button for an explicit closing of the menu. Useful on mobiles. |
| selectedMenuItemStyle | object | {color: muiTheme.menuItem.selectedTextColor} | Styles to be applied to the selected MenuItem. |
| selectionsRenderer | function | see below | Provide your own renderer for selected options. Defaults to concatenating children's values text. Check CodeExample4 for a more advanced renderer example. |
| checkedIcon | SVGicon | see below | The SvgIcon to use for the checked state. This is useful to create icon toggles. |
| unCheckedIcon | SVGicon | see below | The SvgIcon to use for the unchecked state. This is useful to create icon toggles. |
| hoverColor | string | 'rgba(69, 90, 100, 0.1)' | Overrides the hover background color. |
| floatingLabelStyle | object | | Allows to change the styles of the floating label. |
| floatingLabelFocusStyle | object | | Allows to change the styles of the floating label when focused. |
| underlineStyle | object | | Allows to change the styles of the underline. |
| underlineFocusStyle | object | | Allows to change the styles of the underline when focused. |
| autocompleteUnderlineStyle | object | | Allows to change the styles of the searchTextField's underline. |
| autocompleteUnderlineFocusStyle | object | | Allows to change the styles of the searchTextField's underline when focused. |

#### Default functions
| Name | Default function |
|:---- |:---- |
| checkedIcon | `<CheckedIcon style={{ top: 'calc(50% - 12px)' }} />` |
| unCheckedIcon | `<UnCheckedIcon style={{ top: 'calc(50% - 12px)' }} />` |
| autocompleteFilter | ```(searchText, text) => !text || text.toLowerCase().includes(searchText.toLowerCase())``` |
| selectionsRenderer |  |
<pre>(values, hintText) => {
   if (!values) return hintText
   const { value, label } = values
   if (Array.isArray(values)) {
      return values.length
         ? values.map(({ value, label }) => label || value).join(', ')
         : hintText
   }
   else if (label || value) return label || value
   else return hintText
}</pre>
