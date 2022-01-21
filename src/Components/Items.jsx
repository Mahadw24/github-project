import React from 'react';
import '../styles/items.css'
import BasicModal from './Modal';

const Items = ({login,html_url,avatar_url}) => {

  return (
    <>
    <div className="items">
        <div className="avatar">
        <img src={avatar_url} alt="" />
        </div>
        <div className="data">
        <BasicModal login={login} html_url={html_url} />
        </div>
        <div className="link">
          <ul>
            <li>
            <a href={html_url} target="_blank" rel="noreferrer">Profile</a>
            </li>
          </ul>
        </div>
    </div>
    </>
  );
};

export default Items;