import React from "react";
import "./posts.css";

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import { Avatar } from "@mui/material";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
    return (
      <div className="post" >
        <div className="post-avatar">
        <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
               {displayName}
                <span className="post-headerSpecial">
                  {verified && <CheckCircleRoundedIcon className="post-badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post-headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post-footer">
            <ChatBubbleOutlineIcon color="red" fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <PublishRoundedIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }


export default Post;