import React from 'react';
import {useParams} from "react-router-dom";

function PostInfo({cards}) {
    const params = useParams()
    const prodId = params.id
    const post = cards.find(item => item._id === prodId)

    console.log('POSTINFO>>>',post)
    return (
        <>
            <div> {post._id}</div>
            <div> {post.author.name}</div>
            <div> PostInfo component</div>
            <div> PostInfo component</div>
        </>
    );
}

export default PostInfo;