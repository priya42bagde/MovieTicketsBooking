import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import AbomovieApiut from './movieApi'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const wrapper = shallow(
    <movieApi />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<movieApi/>).toJSON();
  expect(tree).toMatchSnapshot();
});

