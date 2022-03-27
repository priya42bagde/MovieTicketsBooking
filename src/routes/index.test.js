import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import index from './index'
configure({adapter: new Adapter()});

configure({adapter: new Adapter()});
it("renders correctly", () => {
  const wrapper = shallow(
    <index />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<index/>).toJSON();
  expect(tree).toMatchSnapshot();
});

