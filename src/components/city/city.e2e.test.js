import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import City from './city';

configure({adapter: new Adapter()});

it(`City link works correct`, () => {
  const handleCityClick = jest.fn();
  const screen = shallow(
      <City
        handleCityClick={handleCityClick}
        city={`Amsterdam`}
        isCurrent={true}
      />);

  const linkElement = screen.find(`.locations__item-link`);

  linkElement.simulate(`click`);

  expect(handleCityClick).toHaveBeenCalledTimes(1);
});
