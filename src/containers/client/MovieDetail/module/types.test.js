import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import types from './types'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <types />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<types/>).toJSON();
  expect(tree).toMatchSnapshot();
});


