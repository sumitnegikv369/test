/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import App, { MyContext } from '../App';
import UserComp from '../components/UserComponent';

test('renders UserComponent with initial context value', () => {
  render(<App />);

  const headingElement = screen.getByText(/Sumit/i);
  expect(headingElement).toBeInTheDocument();

  const ageElement = screen.getByText(/25/i);
  expect(ageElement).toBeInTheDocument();
});

test('changes username on button click', () => {
  render(<App />);

  const buttonElement = screen.getByText(/Change Name/i);
  fireEvent.click(buttonElement);

  const newHeadingElement = screen.getByText(/kavi/i);
  expect(newHeadingElement).toBeInTheDocument();
});

test('renders UserComp with provided context value and prop', () => {
    const contextValue = { name: 'Sumit' };
  
    render(
      <MyContext.Provider value={contextValue}>
        <UserComp age="29" />
      </MyContext.Provider>
    );
    const headingElement = screen.getByText(/Sumit/i);
    expect(headingElement).toBeInTheDocument();
  
    const ageElement = screen.getByText(/29/i);
    expect(ageElement).toBeInTheDocument();
})
