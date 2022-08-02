import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('check if input value changes the list', () => {
  render(<App />)

  const listElement = screen.getByTestId('app-list')
  expect(listElement.childElementCount).toBe(7)

  const inputElement = screen.getByTestId('app-input')
  fireEvent.change(inputElement, {target: {value: 'apple'}})
  expect(inputElement.value).toBe('apple')

  expect(listElement.childElementCount).toBe(2)
});
