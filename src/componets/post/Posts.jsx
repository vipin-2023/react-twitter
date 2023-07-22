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
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5iJeyfGab7MwtNiLF86gjQgq5Ta36gIHrw&usqp=CAU" />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                vipin
                <span className="post-headerSpecial">
                  {true && <CheckCircleRoundedIcon className="post-badge" />} @
                  vipin_ii
                </span>
              </h3>
            </div>
            <div className="post-headerDescription">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti minima eligendi eveniet quidem vitae omnis magni tempore consequuntur ?my trip vibe</p>
            </div>
          </div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/3KWcqxPlvmgkpMS5VdjLAk/3cbdd812faf4b8c343b259656d31a0ee/rendered_15.jpg?fit=fill&w=600&h=338" alt="" />
          <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <PublishRoundedIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }


export default Post;