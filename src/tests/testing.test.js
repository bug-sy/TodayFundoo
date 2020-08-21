
// ComponentName.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ComponentName from '../components/testcases/testing'
describe("ComponentName", () => {
  

it("should render initial layout", () => {
    // when
    const component = shallow(<ComponentName />);
    // then
    expect(component.getElements()).toMatchSnapshot();
});
});