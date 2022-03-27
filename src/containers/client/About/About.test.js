import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import About from './About'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <About />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<About/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
    const toggleInstance = shallow(<About />);
    const element = toggleInstance.find('div h3');
    expect(element.text()).toMatchSnapshot();
   });