import React from 'react';
import { render } from '@testing-library/react';
import Pusher from '../components/testcases/Pusher';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App component', () => {
    it('starts with a count of 0', () => {
      const wrapper = shallow(<Pusher />);
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: 0');
    });

    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<Pusher/>);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 1');
      });

      it('decrements count by 1 when the decrement button is clicked', () => {
        const wrapper = shallow(<Pusher />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: -1');
      });

      it('matches the snapshot', () => {
        const tree = renderer.create(<Pusher/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
  });