// import React from 'react';
// import { render } from '@testing-library/react';
// import UserSignin from '../components/User_signin';
// import { shallow } from 'enzyme';

// test('User Signin Form', () => {
//     const component = shallow(<UserSignin/>);
//     const form = component.find('text');
//     // when
//     form.props().onChange({target: {
//        name: 'email',
//        value: 'rakesh.sahu994@gmail.com'
//     }});
//     // then
//     expect(component.state('text')).toEqual('rakesh.sahu994@gmail.com');
// });


import React from 'react';
import { shallow } from 'enzyme';
import UserSignin from '../components/User_signin';
import TextField from "@material-ui/core/TextField";


describe("MyComponent", () => {
    it("should create an entry in component state", () => {
        // given
        const component = shallow(<UserSignin />);
        const form = component.find('input');
        // when
        form.props().onChange({target: {
           name: 'myName',
           value: 'myValue'
        }});
        // then
        expect(component.state('input')).toEqual('myValue');
    });

    it("should check for onChange method (2)", () => {
        // const wrapper = shallow(<Comment onChange={}/>)
      
    
        const component = shallow(
          <UserSignin  commentBody={"test"} />
        );
        const form = component
          .find(TextField)
          .at(0)
          .props()
          .onChange({target: {
            name: 'email',
            value: 'rakesh.sahu694@gmail.com'
          }});
          
          // th
          expect(component.state('email')).toEqual('rakesh.sahu694@gmail.com');
      });

      it("should check for onChange method (3)", () => {
        const component = shallow(
          <UserSignin  commentBody={"test"} />
        );
        const form = component
          .find(TextField)
          .at(1)
          .props()
          .onChange({target: {
            name: 'password',
            value: 'abcdefg'
          }});
          
          // th
          expect(component.state('passwordTest')).toEqual('abcdefg');
       });
})