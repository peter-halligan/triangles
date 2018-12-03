import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Error } from './Error.component';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(' matches the snapshot ',  () =>{
  const tree = renderer
    .create(<Error error={"test"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});