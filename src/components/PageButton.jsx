import React from 'react'

export const PageButton = ({pg, setPage}) => {
	return (
		<button onClick={() => setPage(pg)}>
			{pg}
		</button>
	)
}
