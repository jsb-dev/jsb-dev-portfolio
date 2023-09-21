<template>
  <div id="hud-container">
    <button id="contact-btn" @click="toggleContactModal"></button>
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

    <button id="info-btn" @click="toggleInfoModal"></button>
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

button {
  margin: 1.8rem;
  padding: 0;
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

#contact-btn,
#info-btn,
.compact-nav-button {
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
}

#contact-btn {
  background-image: url('../assets/icons/contact.png');
}

#info-btn {
  background-image: url('../assets/icons/info.png');
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
