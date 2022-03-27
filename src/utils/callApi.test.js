import callApi from './callApi';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <callApi />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
    const tree = renderer.create(<callApi/>).toJSON();
    expect(tree).toMatchSnapshot();
});
  
it('renders the component', () => {
  const wrapper = shallow(<callApi />);
  expect(wrapper.exists()).toBe(true);
});
