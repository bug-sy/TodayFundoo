import React from 'react';
import { render } from '@testing-library/react';
import UserSignin from '../components/User_signin';

test('User Signin Form', () => {
  const { container } = render(<UserSignin/>);
  container.querySelector('.my-class')
  expect(container.firstChild).toMatchSnapshot()
});