import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
    return <div className='container'><h1>Create Post</h1>
        <PostCreate />
        <hr></hr>
        <h1>PostList</h1>
        <PostList></PostList>
    </div>
};