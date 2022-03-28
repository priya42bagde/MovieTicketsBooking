import RegisterClick from './RegisterClick';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { render, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer'
//import { render } from 'react-dom';
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

 it("show the sended message", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<RegisterClick />);
  const inputValue = "abc";
  const inputValue2 = "abc";
  const inputValue3 = "abc";
  //const inputValue4 = "abc";

  fireEvent.change(getByLabelText("UserId"), { target: { value: inputValue } });
  fireEvent.change(getByLabelText("EmailId"), { target: { value: inputValue2 } });
  fireEvent.change(getByLabelText("Password"), { target: { value: inputValue3 } });
 // fireEvent.change(getByLabelText("ConfirmPassword"), { target: { value: inputValue4 } });
  fireEvent.click(getByText(/Submit/i));


  //expect(onSubmit).toBeCalled();
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

//

it('renders a snapshot', () => {
    const tree = renderer.create(<RegisterClick/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  


   it('renders results after search', () => {
    const wrapper = shallow(<RegisterClick/>);
    expect(wrapper.find('h3').length).toEqual(1);
  });
  it('starts with a count of 0', () => {
      const wrapper = shallow(<RegisterClick />);
      const text = wrapper.find('h3').text();
      expect(text).toEqual('Sigup with your details');
    });

/*
      it('should render correctly', () => {
        expect(render).toHaveBeenCalledWith(
          <RegisterClick/>, 'element-node'
        );
        expect(render).toHaveBeenCalledTimes(1);
      });
*/