import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import Payment from './Payment'
configure({adapter: new Adapter()});

configure({adapter: new Adapter()});
it("renders correctly", () => {
  const wrapper = shallow(
    <Payment />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Payment/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
    const toggleInstance = shallow(<Payment />);
    const element = toggleInstance.find('div h3');
    expect(element.text()).toMatchSnapshot();
   });