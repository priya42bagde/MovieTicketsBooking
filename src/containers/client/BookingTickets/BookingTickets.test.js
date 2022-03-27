import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BookingTickets from './BookingTickets'
configure({adapter: new Adapter()});


it("renders correctly", () => {
  const wrapper = shallow(
    <BookingTickets />
  );
  expect(wrapper).toMatchSnapshot();
});



