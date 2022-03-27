import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import SeatPlan from './SeatPlan'
configure({adapter: new Adapter()});

configure({adapter: new Adapter()});
it("renders correctly", () => {
  const wrapper = shallow(
    <SeatPlan />
  );
  expect(wrapper).toMatchSnapshot();
});


