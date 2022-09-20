// import { Component } from "react";

import './card.styles.css';
import React from 'react';

const Card = ({monster}) => {
   
        const { name, email, id } = monster;
        return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
    
}

export default Card;