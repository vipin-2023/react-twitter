import React from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@mui/material";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5iJeyfGab7MwtNiLF86gjQgq5Ta36gIHrw&usqp=CAU" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox-imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button type="submit" className="tweetBox-tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
