import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Pipeline DevSecOps Rodando/i); // Atualizado
  expect(titleElement).toBeInTheDocument();
});

test('renders the welcome message', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/O ambiente de front-end foi configurado com sucesso/i); // Atualizado
  expect(paragraphElement).toBeInTheDocument();
});
