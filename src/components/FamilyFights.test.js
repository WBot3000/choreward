import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FamilyFights from './FamilyFights';

const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>)
  };
};

test('renders the two fight buttons and checks navigation', () => {
  const { getByText, history } = renderWithRouter(<FamilyFights />);

  const myFightsButton = getByText('My Fights');
  const otherFightsButton = getByText('Other Fights');

  expect(myFightsButton).toBeInTheDocument();
  expect(otherFightsButton).toBeInTheDocument();

  fireEvent.click(myFightsButton);
  expect(history.location.pathname).toBe('/FamilyFights/MyFights');

  fireEvent.click(otherFightsButton);
  expect(history.location.pathname).toBe('/FamilyFights/OtherFights');
});