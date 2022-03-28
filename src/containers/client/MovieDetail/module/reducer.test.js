import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import reducer from './reducer'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <reducer />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<reducer/>).toJSON();
  expect(tree).toMatchSnapshot();
});



