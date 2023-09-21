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
  min-height: 80px;
  background-color: #62666d;
  box-shadow: inset 0 0 2.5rem 0.1rem rgba(0, 0, 0, 0.6);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
.button-li {
  box-shadow: inset 0 0 2.5rem 0.1rem rgba(255, 255, 255, 0.5),
    0 0 2.5rem 0.1rem rgb(0, 0, 0);
  text-align: center;
}
.nav-button {
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

li,
.button-li,
.nav-button {
  height: 7vh;
}

li,
.button-li,
.nav-button {
  min-width: 15vw;
  min-width: 15vw;
}
</style>
