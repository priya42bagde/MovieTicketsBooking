import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import Loader from './Loader'

import { render, screen } from '@testing-library/react';

configure({adapter: new Adapter()});

configure({adapter: new Adapter()});
it("renders correctly", () => {
  const wrapper = shallow(
    <Loader />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Loader/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
    const toggleInstance = shallow(<Loader />);
    const element = toggleInstance.find('div span');
    expect(element.text()).toMatchSnapshot();
   });


test('render h1 element', () => {
  render(<Loader />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});