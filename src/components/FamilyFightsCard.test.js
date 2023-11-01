import React from 'react';
import { render, screen } from '@testing-library/react';
import FamilyFightsCard from './FamilyFightsCard';

describe('FamilyFightsCard component', () => {
    test('renders fight items correctly', () => {
        render(<FamilyFightsCard />);

        const fightText1 = screen.getByText('Family Fight 1 VS Family Fight 2');
        expect(fightText1).toBeInTheDocument();

        const viewButtons = screen.getAllByText('View');
        expect(viewButtons.length).toBe(2); // two button
    });

    test('renders date placeholder', () => {
        render(<FamilyFightsCard />);

        const datePlaceholder = screen.getByText('00:00:0000');
        expect(datePlaceholder).toBeInTheDocument();
    });
});


