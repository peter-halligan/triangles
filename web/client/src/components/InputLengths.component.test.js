import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { InputLengths } from "./InputLengths.component";

let instance;
let fetch = jest.fn(() => {return {"type": "scalene"}});
let event = { target: {name: "a", value:1}, preventDefault: jest.fn()}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputLengths />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(' matches the snapshot ',  () =>{
  const tree = renderer
    .create(<InputLengths />);
  instance = tree.getInstance();
  instance.handleSubmit(event);
  expect(event.preventDefault).toHaveBeenCalled()
  expect(fetch).toHaveBeenCalled()

  console.log("\n\n\n instance ", instance.state);


});