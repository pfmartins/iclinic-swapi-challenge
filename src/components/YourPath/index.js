import React from 'react';
import './yourpath.css';

const YourPath = (props) => {
  return (
    <div data-testid="yourpathcontainer" className={`yourpath__container yourpath__container--${props.people.style}`}>
      <div className="yourpath__container--center">
        <img className="yourpath__container-img" src={props.people.avatar} alt="avatar"/>
      </div>
      <div className={`yourpath__title yourpath__title--${props.people.style}`}>Your master is <b>{props.people.name}</b></div>
    </div>
  )
}

export default YourPath;