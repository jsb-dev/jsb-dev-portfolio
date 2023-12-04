<template>
  <div id="hud-container">
    <button id="contact-btn" @click="toggleContactModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="60%"
        viewBox="0 0 576 512"
      >
        <path
          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
          fill="rgb(185, 208, 237)"
        />
      </svg>
    </button>
    <transition name="fade">
      <div v-if="showContactModal" id="contact-modal">
        <section id="contact-section">
          <ul id="contact-list">
            <h2>Contact</h2>
            <li>
              Email:
              <a href="mailto:jsb-dev@outlook.com">jsb-dev@outlook.com</a>
            </li>
            <li>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/jacob-booth-1a9390233/"
                target="_blank"
                >Jacob Booth</a
              >
            </li>
            <li>
              GitHub:
              <a href="https://github.com/jsb-dev" target="_blank">jsb-dev</a>
            </li>
          </ul>
        </section>
      </div>
    </transition>

    <button id="info-btn" @click="toggleInfoModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="60%"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          fill="rgb(185, 208, 237)"
        />
      </svg>
    </button>
    <transition name="fade">
      <section>
        <div v-if="showInfoModal" id="info-modal">
          <ul id="info-list">
            <h2>Info</h2>
            <h3>HOME</h3>
            <li>
              An introduction to myself, my skills, and what I will bring to
              your company.
            </li>
            <h3>DEMO</h3>
            <li>
              A demonstration of how I implement core HTML, CSS, and JS concepts
              in Vue3 to creative a responsive, convenient UI.
              <p>
                Click the "Read" button to open a topic's corresponding
                description
              </p>
              <p>Click the yellow button for content map toggling.</p>
            </li>
            <h3>PORTFOLIO</h3>
            <li>
              My past projects with their respective overviews, repo links, and
              demonstrations.
              <p>
                <strong>Applicate</strong>
                <br />
                My first full-stack project!
              </p>

              <p>
                <strong>Bs. CS</strong>
                <br />
                A running chronicle of my tertiary submissions
              </p>
            </li>
            <h3>METHOD</h3>
            <li>
              A descriptive explanation of my problem solving methodology.
            </li>
          </ul>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContactModal: false,
      showInfoModal: false,
    };
  },
  methods: {
    toggleContactModal() {
      this.showContactModal = !this.showContactModal;
      this.showInfoModal = false;
    },
    toggleInfoModal() {
      this.showInfoModal = !this.showInfoModal;
      this.showContactModal = false;
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 3rem 0;
  margin: 1rem 0;
}

a {
  text-decoration: underline;
  color: rgb(185, 94, 238);
}

img {
  max-width: 80%;
  max-height: 80%;
  margin: 0;
}

#hud-container {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

#contact-modal,
#info-modal {
  position: absolute;
  bottom: 13rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: fit-content;
  max-height: 50vh;
  box-shadow: inset 0 0 2rem 0.1rem rgba(255, 255, 255, 0.4),
    0 0 4rem 4rem rgba(0, 0, 0, 0.8);
}

#info-modal > * {
  overflow-y: scroll;
}

#contact-modal,
#info-modal,
#contact-modal li {
  background-color: rgba(29, 29, 29, 0.95);
  font-size: 1.5rem;
}

#contact-modal *,
#info-modal * {
  padding: 1rem;
  list-style-type: none;
}

#contact-btn {
  position: fixed;
  bottom: 0;
  left: 0.5rem;
}

#info-btn {
  position: fixed;
  bottom: 0;
  left: 10rem;
}

#contact-btn,
#info-btn {
  width: 50px;
  height: 50px;
  box-shadow: 0 0 3rem 0.1rem rgba(0, 0, 0, 0.8),
    inset 0 0 1.6rem 0.2rem rgba(0, 0, 0, 0.7);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
