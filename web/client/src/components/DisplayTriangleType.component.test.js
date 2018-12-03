import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {DisplayTriangleType }from './DisplayTriangleType.component'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayTriangleType type={"scalene"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(' renders scalene when it is passed as a prop ',  () =>{
  const tree = renderer
    .create(<DisplayTriangleType type={"scalene"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test(' renders isosceles when it is passed as a prop ',  () =>{
  const tree = renderer
    .create(<DisplayTriangleType type={"isosceles"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test(' renders equilateral when it is passed as a prop ',  () =>{
  const tree = renderer
    .create(<DisplayTriangleType type={"equilateral"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
