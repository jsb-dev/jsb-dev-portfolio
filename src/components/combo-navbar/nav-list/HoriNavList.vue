<template>
    <ul class="horizontal-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/info/html">HTML</router-link></li>
      <li><router-link to="/info/css">CSS</router-link></li>
      <li><router-link to="/info/js">JavaScript</router-link></li>
    </ul>
  </template>
  
  <style scoped>
  .horizontal-list {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
  }
  </style>
  