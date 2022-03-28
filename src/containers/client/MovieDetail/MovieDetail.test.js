import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer'
import MovieDetail from './MovieDetail'
configure({ adapter: new Adapter() });
import * as reactRedux from 'react-redux'

describe('Given invalid details the form should display an error', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')


it("renders correctly", () => {
  const wrapper = shallow(
    <MovieDetail />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders a snapshot', () => {
  const tree = renderer.create(<MovieDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should show the text', () => {
  const toggleInstance = shallow(<MovieDetail />);
  const element = toggleInstance.find('div h1');
  expect(element.text()).toMatchSnapshot();
});

it('renders results after search', () => {
  const wrapper = shallow(<MovieDetail />);
  expect(wrapper.find('h1').length).toEqual(1);
});
it('starts with a count of 0', () => {
  const wrapper = shallow(<MovieDetail />);
  const text = wrapper.find('h1').text();
  expect(text).toEqual('ShowTime');
});

it('does something', () => {
  const dummyDispatch = jest.fn()
  useDispatchMock.mockReturnValue(dummyDispatch)
  expect(dummyDispatch).not.toHaveBeenCalled();
})


it('test suite', () => {
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })
})

})