import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/ConfigureStore';
import Rocket from '../Components/Rocket';
import Rockets from '../pages/Rockets';
// import rocketSlice, { reserveRocket } from '../Redux/Rockets/rocketsSlice';

describe('It renders', () => {
  it('Rocket correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Rockets correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
