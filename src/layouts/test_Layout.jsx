import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardLayouts from './DashboardLayouts';

describe('DashboardLayouts', () => {
  it('renders the dashboard layout', () => {
    render(<DashboardLayouts />);
    const dashboardTitle = screen.getByText('Dashboard');
    expect(dashboardTitle).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(<DashboardLayouts />);
    const dashboardLink = screen.getByText('Dashboard');
    const teamLink = screen.getByText('Team');
    const projectsLink = screen.getByText('Projects');
    const calendarLink = screen.getByText('Calendar');
    
    expect(dashboardLink).toBeInTheDocument();
    expect(teamLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(calendarLink).toBeInTheDocument();
  });

  it('displays user information', () => {
    render(<DashboardLayouts />);
    const userName = screen.getByText('Tom Cook');
    const userEmail = screen.getByText('tom@example.com');
    
    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });

  it('displays user profile image', () => {
    render(<DashboardLayouts />);
    const userImage = screen.getByAltText('User Image');
    
    expect(userImage).toBeInTheDocument();
  });

  it('displays a bell icon for notifications', () => {
    render(<DashboardLayouts />);
    const bellIcon = screen.getByAltText('View notifications');
    
    expect(bellIcon).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<DashboardLayouts />);
    const mobileMenuButton = screen.getByAltText('Open main menu');
    
    // Simulate a click on the mobile menu button
    userEvent.click(mobileMenuButton);
  });
});