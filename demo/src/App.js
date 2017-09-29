import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import SelectField from '../../src'

class App extends Component {

  getElemets (count) {
    let elements = []
    for (let i = 0; i < count; i++) {
      elements.push(
        <div value={i}>Option {i}</div>
      )
    }
    return elements
  }

  render() {
    const {
      setFilterIsOpen,
      list,
      setSearch,
      muiTheme
    } = this.props

    return (
      <div>
        <AppBar
          iconElementLeft={<div></div>}
          title={`material-ui-selectfield`}
        />

        <SelectField
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          // open={true}
          // errorText='HELP'
          name='state11'
          hintText='Single value'
          style={{ width: 250, margin: 100 }}>

          {this.getElemets(1000)}

        </SelectField>



      </div>
    )
  }
}


export default App
