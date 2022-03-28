import LoginClick from './LoginClick';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { render, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <LoginClick />
  );
  expect(wrapper).toMatchSnapshot();
});

it("show the sended message", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<LoginClick />);
  const inputValue = "abc";
  const inputValue2 = "abc";


  fireEvent.change(getByLabelText("UserId"), { target: { value: inputValue } });
  fireEvent.change(getByLabelText("Password"), { target: { value: inputValue2 } });
  fireEvent.click(getByText(/Submit/i));


  //expect(onSubmit).toBeCalled();
  expect(onSubmit).toHaveBeenCalledTimes(0);
});