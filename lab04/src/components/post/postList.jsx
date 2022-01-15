import React from "react";

import {useSelector} from 'react-redux'

export const PostList = ()=>{
    const posts= useSelector(state => state.posts)
    const postElement = posts.map(post => (
        <article className="post-item" key={posts.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{
                post.content.length<100?
                post.content:
                post.content.substring(0,100)+ "..."
            }</p>
        </article>
    ))
    return (
        <section>
            <h2>List of posts</h2>
            {postElement}
        </section>
    )
}