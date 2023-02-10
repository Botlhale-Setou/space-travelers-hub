import React from 'react';
import Renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../Components/Header';

describe('Header', () => {
  test('renders correctly', () => {
    const tree = Renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct header', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('renders the correct title', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    const siteTitle = getByTestId('siteTitle');
    expect(siteTitle).toBeInTheDocument();
  });
});
