import React from 'react'; // Adicione esta linha
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Trabalho de Pipeline DevSecOps/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the welcome message', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Bem-vindo à aplicação de Pipeline DevSecOps!/i);
  expect(paragraphElement).toBeInTheDocument();
});