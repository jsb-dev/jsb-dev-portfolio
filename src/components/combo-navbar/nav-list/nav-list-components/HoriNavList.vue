<template>
  <ul class="horizontal-list">
    <li>
      <router-link to="/" class="nav-link">
        <button class="nav-button">Home</button>
      </router-link>
    </li>
    <li>
      <router-link to="/demo" class="nav-link">
        <button class="nav-button">Demo</button>
      </router-link>
    </li>
    <li>
      <router-link to="/" class="nav-link">
        <button class="nav-button"></button>
      </router-link>
    </li>
    <li>
      <router-link to="/" class="nav-link">
        <button class="nav-button"></button>
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
