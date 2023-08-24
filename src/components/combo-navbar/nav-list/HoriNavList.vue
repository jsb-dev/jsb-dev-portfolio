<template>
    <ul class="horizontal-list">
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><router-link to="/info/html" class="nav-link">HTML</router-link></li>
      <li><router-link to="/info/css" class="nav-link">CSS</router-link></li>
      <li><router-link to="/info/js" class="nav-link">JS</router-link></li>
    </ul>
  </template>
  
  <style scoped>
  .horizontal-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding: 0;
    height: 10vh;
    min-height: 40px;
    background-color: rgb(104, 108, 173);
    box-shadow: inset 0 -1rem 3rem .8rem rgba(0, 0, 0, 0.3);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  .nav-link {
    text-decoration: none;
    color: #fff;
    font-size: min(1.8rem, 12pt);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: all 0.2s ease-in-out;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
    width: 7rem;
    height: 3rem;
    background-color: #c37ee0df;
  }
  </style>
  