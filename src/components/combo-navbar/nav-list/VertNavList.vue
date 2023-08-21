<template>
    <ul class="vertical-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/info/html">HTML</router-link></li>
      <li><router-link to="/info/css">CSS</router-link></li>
      <li><router-link to="/info/js">JavaScript</router-link></li>
    </ul>
  </template>
  
  <style scoped>
  .vertical-list {
    list-style-type: none;
    padding: 0;
  }
  .vertical-list li {
    margin-bottom: 10px;
  }
  </style>
  