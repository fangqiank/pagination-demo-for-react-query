import React, {useState} from 'react'
import { getUsers } from '../api/axios'
import { useQuery } from 'react-query'
import {PageButton} from '../components/PageButton'
import {User} from '../components/User'

export const Example2 = () => {
	const [page, setPage] = useState(1)

	const {
		status,
		isLoading,
		isError,
		error, 
		data,
		isFetching,
		isPreviousData
	} = useQuery(['/users', page], () => getUsers(page),{
			keepPreviousData: true,
		}
	)

	if(isLoading) return <p>Loading Users...</p> 

	if (isError) return <p>Error: {error.message}</p>

	console.log({status})

	console.log({data})

	const firstPage = () => setPage(1)

	const lastPage = () => setPage(data.total_pages)
	
	const pagesArray = Array(data.total_pages)
	.fill()
	.map((_, i) => i + 1)
	
	console.log('pagesArray:', pagesArray)
	
	return (
		<>
			{isFetching && <span className='loading'>Loading...</span>}

			<nav className='nav-ex2'>
				<button
					disabled={isPreviousData || page === 1}
					onClick ={firstPage}
				>
					&lt;&lt;
				</button>
				
				{pagesArray.map(item => (
					<PageButton key={item} pg={item} setPage={setPage}/>
				))}	
				
				<button
					disabled={isPreviousData || page === data.total_pages}
					onClick={lastPage}
				>
					&gt;&gt;
				</button>
			</nav>
			
			{data.data.map(user => (
				<User key={user.id} user={user}/>
			))}

		</>
	)
}




