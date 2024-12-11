import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen'; // Adjust the path as necessary

describe('HomeScreen', () => {
  const mockNavigation = { navigate: jest.fn() };

  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    
    // Check if the title and subtitle are rendered
    expect(getByText('Selamat Datang di Meal Planner')).toBeTruthy();
    expect(getByText('Atur waktu makan dan rencana menu Anda.')).toBeTruthy();
  });

  it('navigates to MenuPlan on button press', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    
    // Simulate button press
    fireEvent.press(getByText('Lihat Rencana Menu'));
    
    // Check if navigation was called
    expect(mockNavigation.navigate).toHaveBeenCalledWith('MenuPlan');
  });
});