import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import actions from './actions'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <actions />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<actions/>).toJSON();
  expect(tree).toMatchSnapshot();
});

