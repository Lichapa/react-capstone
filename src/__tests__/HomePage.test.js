import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HomePage from '../pages/HomePage';

describe('Render components', () => {
  it('render HomePage', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HomePage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
