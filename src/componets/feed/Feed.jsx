import React, { useEffect, useState } from "react";
import "./feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Posts";


import db from "../../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const textData =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur, at reiciendis facilis, omnis aut unde, nulla accusantium eum est quod hic placeat sed itaque? Quod beatae reiciendis optio iste? ";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      console.log(posts);
      // const q = query(collection(db, 'posts'), orderBy('timeStamp'));

      onSnapshot(collection(db, "posts"), (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => doc.data());
        setPosts(newData);
        console.log(posts);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(posts);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h2>Home</h2>
        <div className="feed-header-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-1 h-1"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <TweetBox />
    
       
      {console.log(posts)}
      {posts?.toReversed().map((post) => (
        <Post
          key={post?.id}
          displayName={post?.displayName}
          username={post?.username}
          verified={post?.verified}
          text={post?.text}
          avatar={post?.avatar}
          image={post?.image}
        />
      ))}

      {/* <Post
        avatar={avtarImg.avt1}
        displayName={"vipin"}
        username={"vvvvipin"}
        verified={true}
        image={postImg.post6}
      />
      <Post
        avatar={avtarImg.avt2}
        displayName={"vipin"}
        text={"this is a post discription "}
        username={"vvvvipin"}
        verified={false}
        image={postImg.post4}
      />
      <Post
        avatar={avtarImg.avt3}
        displayName={"vipin"}
        text={textData}
        username={"vvvvipin"}
        verified={true}
        image={postImg.post3}
      />
      <Post
        avatar={avtarImg.avt5}
        displayName={"vipin"}
        text={"this is a post discription "}
        username={"vvvvipin"}
        verified={false}
        image={postImg.post1}
      />
      <Post
        avatar={avtarImg.avt4}
        displayName={"vipin"}
        text={"this is a post discription "}
        username={"vvvvipin"}
        verified={false}
        image={postImg.post2}
      />
      <Post
        avatar={avtarImg.avt3}
        displayName={"vipin"}
        text={"this is a post discription "}
        username={"vvvvipin"}
        verified={false}
        image={postImg.post5}
      /> */}
    </div>
  );
};

export default Feed;
