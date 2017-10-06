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
        <div key={i} value={`Option ${i}`}>Option {i}</div>
      )
    }
    return elements
  }

  getCountries (count) {
    let elements = []

    elements.push(
      <div key={0} value={'Account'} label={'Account'} style={{padding: 5}}>
        {'Account'}
        <FontIcon className="material-icons" style={{position: 'fixed', right: 10}}>account_circle</FontIcon>
      </div>
    )
    elements.push(
      <div key={1} value={'Assignment'} label={'Assignment'} style={{padding: 5}}>
        {'Assignment'}
        <FontIcon className="material-icons" style={{position: 'fixed', right: 10}}>assignment</FontIcon>
      </div>
    )
    elements.push(
      <div key={2} value={'Build'} label={'Build'} style={{padding: 5}}>
        {'Build'}
        <FontIcon className="material-icons" style={{position: 'fixed', right: 10}}>build</FontIcon>
      </div>
    )

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
          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Autocomplete</p>
            <br />
            <SelectField
              name='autocomplete'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(1000)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Multiple selections</p>
            <br />
            <SelectField
              multiple
              checkPosition='left'
              name='multiple_selections'
              hintText='Multiple values'
              style={{ width: 200 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>


          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Multiple selection with close button</p>
            <br />
            <SelectField
              multiple
              checkPosition='left'
              name='close_button'
              hintText='Multiple values'
              menuCloseButton={<FlatButton label='close' />}
              style={{ width: 200 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Always open</p>
            <br />
            <SelectField
              open
              name='always_open'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Error-text</p>
            <br />
            <SelectField
              errorText='Error!'
              name='error_text'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Custom styling</p>
            <br />
            <SelectField
              menuStyle={{ backgroundColor: 'lightblue' }}
              hoverColor={'blue'}
              underlineStyle={{ borderColor: 'green' }}
              underlineFocusStyle={{ borderColor: 'yellow' }}
              name='custom_styling'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Floating label</p>
            <br />
            <SelectField
              floatingLabel='Hello, I am the floating label'
              name='floating_label'
              hintText='Single value'
              style={{ width: 200 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Icons</p>
            <br />
            <SelectField
              name='floating_label'
              hintText='Single value'
              elementHeight={46}
              style={{ width: 200 }}>
              {
                this.getCountries()
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 400 }}>
            <p>Disabled</p>
            <br />
            <SelectField
              disabled
              name='disabled'
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
