import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchOutlinedIcon className="widgets-searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets-widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1682997638625361920"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
          noScrollbar={true}
          className="singleFeed"
        />

        {/* <TwitterShareButton
          url={"https://facebook.com/elonmusk"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
      </div>
    </div>
  );
};

export default Widgets;
