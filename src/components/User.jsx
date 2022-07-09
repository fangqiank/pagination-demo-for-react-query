import React from 'react'

export const User = ({user}) => {
	return (
		<article>
			<img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
			<h2>{`${user.first_name} ${user.last_name}`}</h2>
			<p>Email: {user.email}</p>
			<p>User Id: {user.id}</p>
		</article>
	)
}
