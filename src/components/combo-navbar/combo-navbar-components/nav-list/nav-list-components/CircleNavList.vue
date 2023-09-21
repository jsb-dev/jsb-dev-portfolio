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
button:hover {
  box-shadow: none;
}
.circle-container {
  list-style-type: none;
  position: absolute;
  bottom: 9.5rem;
  right: 21rem;
  background-color: black;
  width: fit-content;
}

.circle-container li {
  position: absolute;
  transform-origin: 50% 50%;
  transform: rotate(var(--angle, 0deg)) translateY(-100%);
}
.circle-container li:nth-of-type(1) {
  transform: translateX(0.4rem) rotate(var(--angle, 0deg)) translateY(-100%);
  --angle: 0deg;
}

.circle-container li:nth-of-type(2) {
  --angle: 90deg;
  transform: translateX(0.7rem) rotate(var(--angle, 0deg)) translateY(-100%);
}

.circle-container li:nth-of-type(3) {
  --angle: 180deg;
  transform: translateX(-1.1rem) rotate(var(--angle, 0deg)) translateY(-100%);
}

.circle-container li:nth-of-type(4) {
  --angle: 270deg;
  transform: translateX(-1.1rem) rotate(var(--angle, 0deg)) translateY(-100%);
}

.nav-link {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(var(--text-rotate, 0deg));
  width: fit-content;
  height: fit-content;
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
