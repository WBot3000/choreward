import React from 'react';
import { render, screen } from '@testing-library/react';
import Weekly from './Weekly';

describe('Weekly component', () => {
    test('renders tasks with correct items', () => {
        render(<Weekly />);

        const takeOutTrashTask = screen.getByText('Take Out the Trash');
        expect(takeOutTrashTask).toBeInTheDocument();

        const makeBedTask = screen.getByText('Make The Bed');
        expect(makeBedTask).toBeInTheDocument();
    });

    test('renders View and Delete buttons for each task', () => {
        render(<Weekly />);

        // vertify view and delete for each task
        const viewButtons = screen.getAllByText('View');
        expect(viewButtons.length).toBe(2);

        const deleteButtons = screen.getAllByText('Delete');
        expect(deleteButtons.length).toBe(2);
    });
});




