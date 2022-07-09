import React from 'react'

export const Post = ({post}) => {
	return (
		<article>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<p>Post ID: {post.id}</p>
		</article>
	)
}
