<template>
  <ul class="circle-container">
    <li>
      <router-link to="/" class="nav-link">
        <button class="nav-button">Home</button>
      </router-link>
    </li>
    <li>
      <router-link to="/info/html" class="nav-link">
        <button class="nav-button">HTML</button>
      </router-link>
    </li>
    <li>
      <router-link to="/info/css" class="nav-link">
        <button class="nav-button">CSS</button>
      </router-link>
    </li>
    <li>
      <router-link to="/info/js" class="nav-link">
        <button class="nav-button">JS</button>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.circle-container {
  list-style-type: none;
  position: relative;
  bottom: 13vh;
  right: 36vw;
  padding: 0;
  margin: 0;
  border-radius: 50%;
}

.circle-container li {
  position: absolute;
  width: 15rem;
  height: 15rem;
  transform-origin: 50% 50%;
  transform: rotate(var(--angle, 0deg)) translateY(-50%);
}

.circle-container li:nth-child(1) {
  --angle: 0deg;
}

.circle-container li:nth-child(2) {
  --angle: 90deg;
}

.circle-container li:nth-child(3) {
  --angle: 180deg;
}

.circle-container li:nth-child(4) {
  --angle: 270deg;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-size: min(1.8rem, 9pt);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  transition: all 0.2s ease-in-out;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(var(--text-rotate, 0deg));
  background-color: #c37ee0;
  cursor: pointer;
}

.nav-button {
  background-color: #c37ee0;
}

.circle-container li:nth-child(1) .nav-link {
  --text-rotate: -0deg;
}

.circle-container li:nth-child(2) .nav-link {
  --text-rotate: -90deg;
}

.circle-container li:nth-child(3) .nav-link {
  --text-rotate: -180deg;
}

.circle-container li:nth-child(4) .nav-link {
  --text-rotate: -270deg;
}
</style>
