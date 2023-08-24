<template>
    <ul class="horizontal-list">
      <li><button class="nav-button">
        <router-link to="/" class="nav-link">Home</router-link>
      </button></li>
      <li><button class="nav-button">
        <router-link to="/info/html" class="nav-link">HTML</router-link>
      </button></li>
      <li><button class="nav-button">
        <router-link to="/info/css" class="nav-link">CSS</router-link>
      </button></li>
      <li><button class="nav-button">
        <router-link to="/info/js" class="nav-link">JS</router-link>
      </button></li>
    </ul>
  </template>
  
  <style scoped>
  .horizontal-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    height: 10vh;
    padding: 1rem;
    min-height: 40px;
    background-color: #f5f5f578;
    box-shadow: inset 0 -1rem 2.5rem .5rem rgba(0, 0, 0, 0.6);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  .nav-button {
    color: #fff;
    font-size: min(1.8rem, 12pt);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    background-color: #c37ee0df;
  }

  .nav-button:hover {
    background-color: #464646;
    box-shadow: inset 0 0 30px 1px rgba(255, 255, 255, 0.8), 0 0 30px 1px rgba(0, 0, 0, 0.8);
    color: white;
    transform: translateY(-5px);
  }

  .nav-link {
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: 1rem;
  }
  </style>
  