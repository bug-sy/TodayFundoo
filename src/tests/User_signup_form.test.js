import React from 'react';
import { shallow } from 'enzyme';
import UserSignup from '../components/User_signup_form';
import TextField from "@material-ui/core/TextField";

describe('User Signup Form', () => {


  it("should check for onChange method (3)", () => {
    // const wrapper = shallow(<Comment onChange={}/>)
  

    const component = shallow(
      <UserSignup  commentBody={"test"} />
    );
    const form = component
      .find(TextField)
      .at(0)
      .props()
      .onChange({target: {
        name: 'firstname',
        value: 'rakesh.sahu694@gmail.com'
      }});
      
      // th
      expect(component.state('firstnameTest')).toEqual('rakesh.sahu694@gmail.com');
  });

  it("should check for onChange method (3)", () => {
    const component = shallow(
      <UserSignup  commentBody={"test"} />
    );
    const form = component
      .find(TextField)
      .at(1)
      .props()
      .onChange({target: {
        name: 'lastname',
        value: 'abcdefg'
      }});
      
      // th
      expect(component.state('lastnameTest')).toEqual('abcdefg');
   });

   it("should check for onChange method (3)", () => {
    const component = shallow(
      <UserSignup  commentBody={"test"} />
    );
    const form = component
      .find(TextField)
      .at(2)
      .props()
      .onChange({target: {
        name: 'email',
        value: 'abcdefg'
      }});
      
      // th
      expect(component.state('emailTest')).toEqual('abcdefg');
   });
   it("should check for onChange method (3)", () => {
    const component = shallow(
      <UserSignup  commentBody={"test"} />
    );
    const form = component
      .find(TextField)
      .at(3)
      .props()
      .onChange({target: {
        name: 'password',
        value: 'abcdefg'
      }});
      
      // th
      expect(component.state('passwordTest')).toEqual('abcdefg');
   });

   it("should check for onChange method (3)", () => {
    const component = shallow(
      <UserSignup  commentBody={"test"} />
    );
    const form = component
      .find(TextField)
      .at(4)
      .props()
      .onChange({target: {
        name: 'confirmPassword',
        value: 'abcdefg'
      }});
      
      // th
      expect(component.state('confirmPasswordTest')).toEqual('abcdefg');
   });
});