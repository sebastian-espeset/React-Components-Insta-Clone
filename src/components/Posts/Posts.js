import React from 'react';
import Post from './Post';
import './Posts.css';
const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
    {props.data.map(single_post=>
                    <Post post ={single_post} likePost = {(data)=>{return data}}></Post>)}
            {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
