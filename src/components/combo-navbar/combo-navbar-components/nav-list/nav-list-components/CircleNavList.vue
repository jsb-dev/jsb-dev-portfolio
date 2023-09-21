<template>
  <ul class="circle-container">
    <li class="button-li">
      <router-link to="/" class="nav-link">
        <button class="nav-button">Home</button>
      </router-link>
    </li>
    <li class="button-li">
      <router-link to="/demo" class="nav-link">
        <button class="nav-button">Demo</button>
      </router-link>
    </li>
    <li class="button-li">
      <router-link to="/portfolio" class="nav-link">
        <button class="nav-button">Portfolio</button>
      </router-link>
    </li>
    <li class="button-li">
      <router-link to="/methodology" class="nav-link">
        <button class="nav-button">Method</button>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.circle-container {
  list-style-type: none;
  position: absolute;
  bottom: 10rem;
  right: 17rem;
}

.circle-container li {
  position: absolute;
  transform-origin: 50% 50%;
  transform: rotate(var(--angle, 0deg)) translateY(-100%);
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
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(var(--text-rotate, 0deg));
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
