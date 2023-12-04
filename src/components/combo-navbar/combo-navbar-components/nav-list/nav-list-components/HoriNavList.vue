<template>
  <ul class="horizontal-list">
    <li>
      <router-link to="/" class="router-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 576 512"
        >
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            fill="rgb(185, 208, 237)"
          />
        </svg>
      </router-link>
    </li>
    <li>
      <router-link to="/demo" class="router-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          viewBox="0 0 512 512"
        >
          <path
            d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"
            fill="rgb(185, 208, 237)"
          />
        </svg>
      </router-link>
    </li>
    <li>
      <router-link to="/portfolio" class="router-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          viewBox="0 0 512 512"
        >
          <path
            d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
            fill="rgb(185, 208, 237)"
          />
        </svg>
      </router-link>
    </li>
    <li>
      <router-link to="/methodology" class="router-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="80%"
          viewBox="0 0 384 512"
        >
          <path
            d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
            fill="rgb(185, 208, 237)"
          />
        </svg>
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
  background-color: #434549;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0 1rem;
}

li {
  margin: 1rem;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgb(69, 112, 163);
  box-shadow: 0 0 3rem 0.1rem rgba(0, 0, 0, 0.8),
    inset 0 0 1.6rem 0.2rem rgba(0, 0, 0, 0.3);
}

li * {
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

.router-link {
  width: 100px;
  height: 50px;
  padding: 0 2.5rem;
}
</style>
