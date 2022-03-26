import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-15';
import About from "./About";

describe("<About />", () => {
test("should contain h3", () => {
    const barFragmentWrapper = shallow(<About />);
    const result = barFragmentWrapper.find("h3");
    expect(result).toHaveLength(3);
  });
});