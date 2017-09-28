import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import {SelectField} from '../../src'

class App extends Component {


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

          <div value='A'>Option A</div>
          <div value='B'>Option B</div>
          <div value='C'>Option C</div>

        </SelectField>
        


      </div>
    )
  }
}


export default App
