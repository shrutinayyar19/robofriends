import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	let cards = robots.map((user,i) => {return (
			<Card key={user.id} id={i} name={user.name} email={user.email} />
		)});

	return (
			<div>
				{cards}
			</div>
		);
}

export default CardList;