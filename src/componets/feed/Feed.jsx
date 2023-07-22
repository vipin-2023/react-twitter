import React from 'react';
import "./feed.css";
import TweetBox from '../tweetBox/TweetBox';
import Post from '../post/Posts';


const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
      <h2>Home</h2>
      </div>
      <TweetBox/>
      <Post/> <Post/> <Post/> <Post/>
      
    </div>
  )
}

export default Feed
