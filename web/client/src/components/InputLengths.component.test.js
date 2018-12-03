import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { InputLengths } from './InputLengths.component';

beforeEach(() => {
  fetch.resetMocks()
});

let instance;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputLengths />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(' calls the onsubmit the fetch should be called ',() =>{
  let event = { target: {name: "a", value:1}, preventDefault: jest.fn()}
  fetch.mockResponse({ type: 'scalene' });
  const tree = renderer
    .create(<InputLengths setTriangleType={jest.fn()}/>);
  instance = tree.getInstance();
  instance.handleSubmit(event);
  expect(event.preventDefault).toHaveBeenCalled();
  expect(fetch).toHaveBeenCalled();
});


it(' calls the onchange the state "a" should be updated ',() =>{
  let event = { target: {name: "a", value:1}, preventDefault: jest.fn()}
  const tree = renderer
    .create(<InputLengths setTriangleType={jest.fn()}/>);
  instance = tree.getInstance();
  instance.handleChange(event);
  expect(instance.state.a).toEqual(1);
});

it(' calls the onchange the state "b" should be updated ',() =>{
  let event = { target: {name: "b", value:1}}
  const tree = renderer
    .create(<InputLengths setTriangleType={jest.fn()}/>);
  instance = tree.getInstance();
  instance.handleChange(event);
  expect(instance.state.b).toEqual(1);
});

it(' calls the onchange the state "c" should be updated ',() =>{
  let event = { target: {name: "c", value:2}}
  const tree = renderer
    .create(<InputLengths setTriangleType={jest.fn()}/>);
  instance = tree.getInstance();
  instance.handleChange(event);
  expect(instance.state.c).toEqual(2);
});

it(' calls the handleOnFocus the state "c" should be updated to "" ',() =>{
  let event = { target: {name: "c", value:2}}
  const tree = renderer
    .create(<InputLengths setTriangleType={jest.fn()}/>);
  instance = tree.getInstance();
  instance.handleChange(event);
  expect(instance.state.c).toEqual(2);
  instance.handleOnFocus(event);
  expect(instance.state.c).toEqual('');
});

it(' calls the handleOnFocus the state "a" should be updated to "" ',() =>{
  let event = { target: {name: "a", value:1}}
  const tree = renderer
    .create(<InputLengths setTriangleType={jest.fn()}/>);
  instance = tree.getInstance();
  instance.handleChange(event);
  expect(instance.state.a).toEqual(1);
  instance.handleOnFocus(event);
  expect(instance.state.a).toEqual('');
});

