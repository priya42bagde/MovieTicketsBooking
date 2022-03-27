import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import Review from './Review'
configure({adapter: new Adapter()});

configure({adapter: new Adapter()});
it("renders correctly", () => {
  const wrapper = shallow(
    <Review />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Review/>).toJSON();
  expect(tree).toMatchSnapshot();
});

