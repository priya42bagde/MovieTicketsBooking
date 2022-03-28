import Login from './Login';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { render, fireEvent } from "@testing-library/react";

configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <Login />
  );
  expect(wrapper).toMatchSnapshot();
});

/*it('renders a snapshot', () => {
    const tree = renderer.create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
  });*/
  

  it('should show the text', () => {
    const toggleInstance = shallow(<Login />);
    const element = toggleInstance.find('div h3');
    expect(element.text()).toMatchSnapshot();
   });

   it('renders results after search', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('h3').length).toEqual(1);
  });
  it('starts with a count of 0', () => {
      const wrapper = shallow(<Login />);
      const text = wrapper.find('h3').text();
      expect(text).toEqual('Would you like to SignIn or SignUp?');
    });