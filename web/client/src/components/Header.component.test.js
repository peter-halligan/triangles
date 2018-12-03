import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Header } from "./Header.component";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(' matches the snapshot ',  () =>{
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});