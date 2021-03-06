import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import SelectField from '../../src'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FontIcon from 'material-ui/FontIcon'
import Chip from 'material-ui/Chip/Chip'
import SelectField1 from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      autocomplete: null,
      multiple_selections: null,
      chip_selections: null,
      close_button: null,
      always_open: null,
      error_text: null,
      custom_styling: null,
      floating_label: null,
      floating_label: null,
      disabled: null,
    }
  }

  getElemets (count) {
    let elements = []
    for (let i = 1; i <= count; i++) {
      elements.push(
        <div key={i} label={`Option ${i}`} value={i}>Option {i}</div>
      )
    }
    return elements
  }

  getIconElements (count) {
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

  handleCustomDisplaySelections = (name, hintText) => values => {
    if (values != null && values.length) {
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            values.map(({ label, value }, index) => {
              return <Chip key={index} style={{ margin: 5 }} onRequestDelete={() => this.deleteEntry(index, name)}>
                {label}
              </Chip>
            })
          }
        </div>
      )
    } else {
      return <div style={{color: '#b2b2b2'}}>{hintText}</div> //closest to hintText color
    }
  }

  deleteEntry = (key, name) => {
    this.setState({[name]: this.state[name].filter((v, i) => i !== key)})
    this.refs[name].state.isFocused = false
  }

  saveToState = (value, name) => {
    this.setState({[name]: value})
  }

  printState = (name) => {
    return <div>
      state:
      <pre style={{
        height: 100,
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1,
        overflowY: 'auto',
        margin: 0
      }}
      >
        {JSON.stringify(this.state[name], null, 2)}
      </pre>
    </div>
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

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            aaaa
            <SelectField
              name='autocomplete'
              floatingLabel='Single value'
              value={this.state.autocomplete}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(1000)
              }
            </SelectField>
            aaaa
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            aaaa
            <SelectField1
              floatingLabelText="Frequency"
              value={this.state.multiple_selections}
              onChange={(e, newVar) => this.saveToState(newVar, 'multiple_selections')}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField1>
            aaaa
          </Paper>
{/*
          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Multiple selections</b>
            <br />
            <br />
            {this.printState('multiple_selections')}
            <br />
            <SelectField
              multiple
              checkPosition='left'
              name='multiple_selections'
              hintText='Multiple values'
              value={this.state.multiple_selections}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>
          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Chip selection</b>
            <br />
            <br />
            {this.printState('chip_selections')}
            <br />
            <SelectField
              multiple
              onChange={() => console.log("a")}
              checkPosition='left'
              name='chip_selections'
              value={this.state.chip_selections}
              onChange={this.saveToState}
              selectionsRenderer={this.handleCustomDisplaySelections('chip_selections', 'Chip selection')}
              ref='chip_selections'
              style={{ width: 240 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Multiple with close button</b>
            <br />
            <br />
            {this.printState('close_button')}
            <br />
            <SelectField
              multiple
              checkPosition='left'
              name='close_button'
              hintText='Multiple values'
              menuCloseButton={<FlatButton label='close' />}
              value={this.state.close_button}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Always open</b>
            <br />
            <br />
            {this.printState('always_open')}
            <br />
            <SelectField
              open
              name='always_open'
              hintText='Single value'
              value={this.state.always_open}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Error-text</b>
            <br />
            <br />
            {this.printState('error_text')}
            <br />
            <SelectField
              errorText='Error!'
              name='error_text'
              hintText='Single value'
              value={this.state.error_text}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Custom styling</b>
            <br />
            <br />
            {this.printState('custom_styling')}
            <br />
            <SelectField
              menuStyle={{ backgroundColor: 'lightblue' }}
              hoverColor={'blue'}
              underlineStyle={{ borderColor: 'green' }}
              underlineFocusStyle={{ borderColor: 'yellow' }}
              name='custom_styling'
              hintText='Single value'
              value={this.state.custom_styling}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(4)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Floating label</b>
            <br />
            <br />
            {this.printState('floating_label')}
            <br />
            <SelectField
              floatingLabel='Floating Label!'
              name='floating_label'
              value={this.state.floating_label}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Icons</b>
            <br />
            <br />
            {this.printState('icons')}
            <br />
            <SelectField
              name='icons'
              hintText='Single value'
              elementHeight={46}
              value={this.state.icons}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getIconElements()
              }
            </SelectField>
          </Paper>

          <Paper zDepth={3} style={{ padding: 25, margin: 5, width: 300, height: 450 }}>
            <b>Disabled</b>
            <br />
            <br />
            {this.printState('disabled')}
            <br />
            <SelectField
              disabled
              name='disabled'
              hintText='Single value'
              value={this.state.disabled}
              onChange={this.saveToState}
              style={{ width: 230 }}>
              {
                this.getElemets(3)
              }
            </SelectField>
          </Paper>
*/}
        </div>
      </div>
    )
  }
}

export default App
