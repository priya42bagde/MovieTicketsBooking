import Banner from './Banner';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react";

configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <Banner />
  );
  expect(wrapper).toMatchSnapshot();
});


it('renders a snapshot', () => {
  const tree = renderer.create(<Banner/>).toJSON();
  expect(tree).toMatchSnapshot();
});



   it('renders results after search', () => {
    const wrapper = shallow(<Banner/>);
    expect(wrapper.find('Carousel').length).toEqual(1);
  });

  it('renders results after search', () => {
    const wrapper = shallow(<Banner/>);
    expect(wrapper.find('img').length).toEqual(3);
  });

  it('renders results after search', () => {
  const wrapper = shallow(<Banner />);
  const button = wrapper.find('Carousel');
  expect(button).toHaveLength(1);
});

it('renders results after search', () => {
  const wrapper = shallow(<Banner />);
  const button = wrapper.find('CarouselControl');
  expect(button).toHaveLength(2);
});

it('renders results after search', () => {
  const wrapper = shallow(<Banner />);
  const button = wrapper.find('#CarouselControl1');
  expect(button).toHaveLength(2);
  button.simulate('click');
});


it("show the sended message", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Banner />);
  const inputValue = "abc";
  const inputValue2 = "abc";


  fireEvent.change(getByLabelText("Previous"), { target: { value: inputValue } });
  fireEvent.change(getByLabelText("Next"), { target: { value: inputValue2 } });
  fireEvent.click(getByText(/Previous/i));
  fireEvent.click(getByText(/Next/i));

  //expect(onSubmit).toBeCalled();
  expect(onClickHandler).toHaveBeenCalledTimes(2);
});
