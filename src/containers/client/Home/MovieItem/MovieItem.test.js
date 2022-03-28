import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import MovieItem from './MovieItem'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <MovieItem />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<MovieItem/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
    const toggleInstance = shallow(<MovieItem />);
    const element = toggleInstance.find('div h4');
    expect(element.text()).toMatchSnapshot();
   });

   it('renders results after search', () => {
    const wrapper = shallow(<MovieItem/>);
    expect(wrapper.find('img').length).toEqual(1);
  });

