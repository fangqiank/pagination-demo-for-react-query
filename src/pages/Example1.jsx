import React, {useState, useEffect} from 'react'
import { getPosts } from '../api/axios'
import { Post } from '../components/Post'

export const Example1 = () => {
	const [page, setPage] = useState(1)
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getPosts(page)
			.then(data => setPosts(data)
		)},[page])

	const netxPage = () => setPage(prev => prev + 1)
	const prevPage = () => setPage(prev => prev - 1)	

	return (
		<>
			<nav>
				<button
					disabled={page === 1}
					onClick={prevPage}
				>
					Prev
				</button>

				<button
					disabled={!posts?.length}
					onClick={netxPage}
				>
					Next
				</button>
			</nav>

			{posts.map(post => (
				<Post key={post.id} post={post}/>
			))}
		</>
	)
}
