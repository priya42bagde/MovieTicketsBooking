import RegisterClick from './RegisterClick';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <RegisterClick />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should show the text', () => {
  const toggleInstance = shallow(<RegisterClick />);
  const element = toggleInstance.find('div h3');
  expect(element.text()).toMatchSnapshot();
 });