import React from 'react';
import { render } from '@testing-library/react';
import YourPath from '.';

test('renders data aboout people', () => {
	const people = {
		name: 'test',
		style: 'dark',
		avatar: 'avatar.png'
	}

	const { getByText, getByAltText  } = render(<YourPath people={people} />);
	const titleEl = getByText(/Your master/);
	const imgEl = getByAltText('avatar');
	
	expect(imgEl).toHaveAttribute('src', `${people.avatar}`)
	expect(titleEl.textContent).toEqual(`Your master is ${people.name}`);
});

test('renders css classes from props', () => {
	const people = {
		name: 'test',
		style: 'dark',
		avatar: 'avatar.png'
	}

	const { getByText, getByTestId  } = render(<YourPath people={people} />);
	const titleEl = getByText(/Your master/);
	const containerEl = getByTestId(/yourpathcontainer/);

	expect(titleEl).toBeInTheDocument();
	expect(titleEl.className).toEqual(`yourpath__title yourpath__title--${people.style}`);

	expect(containerEl).toBeInTheDocument();
	expect(containerEl.className).toEqual(`yourpath__container yourpath__container--${people.style}`);
});