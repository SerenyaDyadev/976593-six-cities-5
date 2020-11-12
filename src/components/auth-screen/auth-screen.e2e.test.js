import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AuthScreen} from "./auth-screen";
import {enteredInfo} from "../../mocks/data";

jest.mock(`../header/header.jsx`, () => () => `PageHeader`);

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`Submit form in AuthScreen`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = mount(<AuthScreen
    city={`Amsterdam`}
    onSubmit={handleFormSubmit}
    authorizationStatus={`NO_AUTH`}
  />);

  wrapper.instance().loginRef.current.value = enteredInfo.login;
  wrapper.instance().passwordRef.current.value = enteredInfo.password;
  wrapper.find(`.login__form`).simulate(`submit`, mockEvent);

  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  expect(handleFormSubmit).toHaveBeenNthCalledWith(1, enteredInfo);
});
