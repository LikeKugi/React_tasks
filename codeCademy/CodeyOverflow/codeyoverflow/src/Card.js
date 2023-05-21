import React from 'react';

import Body from "./Body";
import Header from "./Header";

function Card({ commentObject }) {
  const { profileImg, username, comment } = commentObject;
  return (
      <>
        <Header profileImg={profileImg} username={username} />
        <Body comment={comment} />
      </>
  );
}

export default Card;