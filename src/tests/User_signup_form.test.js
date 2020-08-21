import React from 'react';
import { render } from '@testing-library/react';
import UserSignup from '../components/User_signup_form';

test('User Signup Form', () => {
  const { container } = render(<UserSignup/>);
  container.querySelector('.my-class')
  expect(container.firstChild).toMatchSnapshot()
});