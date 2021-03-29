import { render, screen } from '@testing-library/react';
import ToDoApp from '../components/ToDoApp.js';

test('renders title "Get Stuff Done"', () => {
  render(<ToDoApp />);
  const title = screen.getByText(/Get Stuff Done/i);
  expect(title).toBeInTheDocument();
});
