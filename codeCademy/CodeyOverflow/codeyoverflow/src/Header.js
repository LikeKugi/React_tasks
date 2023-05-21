import React from 'react';

function Header(props) {
  return (
      <>
        <img src={props.profileImg}
             alt={props.username}/>
      </>
  );
}

export default Header;