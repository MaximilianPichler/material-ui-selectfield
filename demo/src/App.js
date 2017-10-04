import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import SelectField from '../../src'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FontIcon from 'material-ui/FontIcon'


class App extends Component {

  getElemets (count) {
    let elements = []
    for (let i = 1; i <= count; i++) {
      elements.push(
        <div value={`Option ${i}`}>Option {i}</div>
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

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Autocomplete</p>
            <SelectField
              name='state11'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(1000)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Multiple selections</p>
            <SelectField
              multiple
              checkPosition='left'
              name='state11'
              hintText='Multiple values'
              style={{ width: 200 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>


          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Multiple selection with close button</p>
            <SelectField
              multiple
              checkPosition='left'
              name='state11'
              hintText='Multiple values'
              menuCloseButton={<FlatButton label='close' />}
              style={{ width: 200 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Always open</p>
            <SelectField
              open
              name='state11'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Error-text</p>
            <SelectField
              errorText='Error!'
              name='state11'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Custom styling</p>
            <SelectField
              menuStyle={{ backgroundColor: 'lightblue' }}
              hoverColor={'blue'}
              underlineStyle={{ borderColor: 'green' }}
              underlineFocusStyle={{ borderColor: 'yellow' }}
              name='state11'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 500 }}>
            <p>Disaled</p>
            <SelectField
              disabled
              name='state11'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

        </div>



      </div>
    )
  }
}


export default App
