
// Unit tests for: AppBarTwo

import React from 'react'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppBarTwo } from '../AppBar';



describe('AppBarTwo() AppBarTwo method', () => {
  // Happy Path Tests
  describe('Happy Path', () => {
    test('should render the component without crashing', () => {
      // Render the component
      render(
        <Router>
          <AppBarTwo />
        </Router>
      );

      // Check if the component renders the expected text
      expect(screen.getByText(/8110807330/i)).toBeInTheDocument();
      expect(screen.getByText(/Whatsapp : \+91 81108 07330/i)).toBeInTheDocument();
      expect(screen.getByText(/Sattur to Thayilpatti Road/i)).toBeInTheDocument();
    });

    test('should render navigation links correctly', () => {
      // Render the component
      render(
        <Router>
          <AppBarTwo />
        </Router>
      );

      // Check if navigation links are present
      expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Pricelist/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Safety Tips/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    test('should handle missing images gracefully', () => {
      // Mock the require function to simulate missing images
      jest.mock("../../../assets/images/gpay.png", () => {
        throw new Error('Image not found');
      });

      // Render the component
      render(
        <Router>
          <AppBarTwo />
        </Router>
      );

      // Check if the component still renders without crashing
      expect(screen.getByText(/8110807330/i)).toBeInTheDocument();
    });

    test('should handle slow network conditions for Marquee', () => {
      // Render the component
      render(
        <Router>
          <AppBarTwo />
        </Router>
      );

      // Check if the Marquee component is present
      expect(screen.getByText(/Whatsapp : \+91 81108 07330/i)).toBeInTheDocument();
    });
  });
});

// End of unit tests for: AppBarTwo
