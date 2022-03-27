import Header from './Header'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <Header />
  );
  expect(wrapper).toMatchSnapshot();
});
