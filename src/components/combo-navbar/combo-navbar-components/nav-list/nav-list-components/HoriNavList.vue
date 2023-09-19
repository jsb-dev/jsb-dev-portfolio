<template>
  <ul class="horizontal-list">
    <li class="button-li">
      <router-link to="/">
        <button class="nav-button">Home</button>
      </router-link>
    </li>
    <li class="button-li">
      <router-link to="/demo">
        <button class="nav-button">Demo</button>
      </router-link>
    </li>
    <li class="button-li">
      <router-link to="/portfolio">
        <button class="nav-button">Portfolio</button>
      </router-link>
    </li>
    <li class="button-li">
      <router-link to="/methodology">
        <button class="nav-button">Method</button>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.horizontal-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  min-height: 70px;
  background-color: #575757;
  box-shadow: inset 0 0 2.5rem 0.1rem rgba(0, 0, 0, 0.6);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.nav-button {
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
  padding: 1rem;
}

.nav-button:hover {
  border-radius: 1.2rem;
}
.button-li {
  width: 13vw;
  height: 7vh;
  border-radius: 0.8rem;
  box-shadow: inset 0 0 2.5rem 0.1rem rgba(255, 255, 255, 0.5),
    0 0 2.5rem 0.1rem rgb(0, 0, 0);
}
</style>
