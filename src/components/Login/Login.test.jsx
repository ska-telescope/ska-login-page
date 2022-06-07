import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.tsx';

describe('Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});
