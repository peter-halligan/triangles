import React from 'react';
import ReactDOM from 'react-dom';
import { Instructions } from './Instructions.component';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Instructions />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(' matches the snapshot ',  () =>{
  const tree = renderer
    .create(<Instructions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});