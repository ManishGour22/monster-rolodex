// import { Component } from "react";
import './search-box.style.css';
import React from 'react';

const SearchBox = ({className, placeholder, onChangeHandler}) => 
  
    // const {onSearchChange} = this.props;
    (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  


export default SearchBox;