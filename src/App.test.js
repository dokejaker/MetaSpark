// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaSpark/i);
    expect(titleElement).toBeInTheDocument();
});
