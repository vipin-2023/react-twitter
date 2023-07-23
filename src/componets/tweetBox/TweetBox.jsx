import React from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5iJeyfGab7MwtNiLF86gjQgq5Ta36gIHrw&usqp=CAU" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <div className="tweetBox-footer">
          <div className="tweetBox-icons">
            <ImageOutlinedIcon  fontSize="medium" />
            <GifBoxOutlinedIcon fontSize="medium" />
            <PollOutlinedIcon fontSize="medium" />
            <SentimentSatisfiedAltOutlinedIcon fontSize="medium" />
          </div>
          <Button type="submit" className="tweetBox-tweetButton">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
