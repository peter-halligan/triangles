import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {DisplayTriangleType }from './DisplayTriangleType.component'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayTriangleType type={"scalene"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(' renders scalene when it is passed as a prop ',  () =>{
  const tree = renderer
    .create(<DisplayTriangleType type={"scalene"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(' renders isosceles when it is passed as a prop ',  () =>{
  const tree = renderer
    .create(<DisplayTriangleType type={"isosceles"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(' renders equilateral when it is passed as a prop ',  () =>{
  const tree = renderer
    .create(<DisplayTriangleType type={"equilateral"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
