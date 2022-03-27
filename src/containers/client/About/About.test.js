import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import About from './About'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <About />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<About/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
    const toggleInstance = shallow(<About />);
    const element = toggleInstance.find('div h3');
    expect(element.text()).toMatchSnapshot();
   });

   it('renders results after search', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('starts with a count of 0', () => {
      const wrapper = shallow(<About />);
      const text = wrapper.find('h3').text();
      expect(text).toEqual('Movie Tickets is an online movie ticketing website founded by AMC Theatres and Hollywood.com in 2000; CBS Corporation, Famous Players, and National Amusements all came on board prior to launch;[1] and it is now a subsidiary of Fandango Media. MovieTickets.com provides movie times for all theaters, and online ticket purchasing for all Clearview Cinemas and National Amusements theaters, among other smaller chains; such as Mann Theatres in Los Angeles. In 2010, MovieTickets.com sold over 16 million tickets for over 200 exhibitors, with 14,000 screens.');
    });

