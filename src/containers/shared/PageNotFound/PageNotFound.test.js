import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import PageNotFound from './PageNotFound'
configure({adapter: new Adapter()});

configure({adapter: new Adapter()});
it("renders correctly", () => {
  const wrapper = shallow(
    <PageNotFound />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<PageNotFound/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
    const toggleInstance = shallow(<PageNotFound />);
    const element = toggleInstance.find('div h1');
    expect(element.text()).toMatchSnapshot();
});