import React from 'react';
import { render, screen } from '@testing-library/react';
import MyFamilies from './MyFamilies';

describe('MyFamilies component', () => {
    test('renders rewards table with correct items', () => {
        render(<MyFamilies />);

        // tile exit
        const rewardsTitle = screen.getByText('Rewards');
        expect(rewardsTitle).toBeInTheDocument();

        // vertify reward
        const iceCreamReward = screen.getByText('Ice Cream');
        expect(iceCreamReward).toBeInTheDocument();

        const videoGameReward = screen.getByText('New Video Game');
        expect(videoGameReward).toBeInTheDocument();

        const shoesReward = screen.getByText('New Shoes');
        expect(shoesReward).toBeInTheDocument();
    });

    test('renders redeem buttons for rewards', () => {
        render(<MyFamilies />);

        // redeem button
        const redeemButtons = screen.getAllByText('Redeem');
        expect(redeemButtons.length).toBe(3);
    });
});
