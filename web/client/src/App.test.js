import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(' matches the snapshot ',  () =>{
  const tree = renderer
    .create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
  let instance = tree.getInstance();

  instance.setTriangleType({type: "test"})

  expect(instance.state).toEqual({type: 'test'});
  expect(tree.toJSON()).toMatchSnapshot();


});