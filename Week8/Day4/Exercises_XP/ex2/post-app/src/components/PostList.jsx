import { useState } from "react"
import postData from '../posts.json'
const PostList  = ()=>{
    return(
        <div>
            <h1>Hi This is a Title</h1>
            {postData.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>

            ))}
        </div>
    )
    
}

export default PostList 