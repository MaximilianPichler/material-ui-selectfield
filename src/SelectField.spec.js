import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { getMuiTheme } from 'material-ui/styles';
import SelectField from './SelectField';

const context = { muiTheme: getMuiTheme() };

function getElemets(count) {
  let elements = []
  for (let i = 1; i <= count; i++) {
    elements.push(
      <div key={i} label={`Option ${i}`} value={i}>Option {i}</div>
    )
  }
  return elements
}

describe('SelectField', () => {

  it('renders without crashing', () => {
    expect(mount(<SelectField>{getElemets(5)}</SelectField>, { context }))
  });

});
