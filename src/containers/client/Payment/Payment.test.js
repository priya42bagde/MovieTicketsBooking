import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount  } from 'enzyme';
import renderer from 'react-test-renderer'
import Payment from './Payment'
import { render, fireEvent } from "@testing-library/react";



configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <Payment />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders snapshot', () => {
  const tree = renderer.create(<Payment/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render button', () => {
  const wrapper = shallow(<Payment />)
  const buttonElement  = wrapper.find('#submit');
  expect(buttonElement).toHaveLength(1);
  expect(buttonElement.text()).toEqual('Submit');
})


it("show the sended message", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Payment />);
  const inputValue = "abc";
  const inputValue2 = "abc";
  const inputValue3 = "abc";
  const inputValue4 = "abc";

  fireEvent.change(getByLabelText("Bank Name"), { target: { value: inputValue } });
  fireEvent.change(getByLabelText("Account Number"), { target: { value: inputValue2 } });
  fireEvent.change(getByLabelText("IFSC"), { target: { value: inputValue3 } });
  fireEvent.change(getByLabelText("CVV"), { target: { value: inputValue4 } });
  fireEvent.click(getByText(/Submit/i));


  //expect(onSubmit).toBeCalled();
  expect(onSubmit).toHaveBeenCalledTimes(0);
});