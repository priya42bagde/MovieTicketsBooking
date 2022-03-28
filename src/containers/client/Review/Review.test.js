import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import Review from './Review'
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

it('should render button', () => {
  const wrapper = shallow(<Review />)
  const buttonElement  = wrapper.find('.title1');
  expect(buttonElement).toHaveLength(1);
  expect(buttonElement.text()).toEqual(' Our review ');
})

it('should render button', () => {
  const wrapper = shallow(<Review />)
  const buttonElement  = wrapper.find('.prev-btn');
  buttonElement.simulate('click');
})

it('should render button', () => {
  const wrapper = shallow(<Review />)
  const buttonElement  = wrapper.find('.next-btn');
  buttonElement.simulate('click');
})
