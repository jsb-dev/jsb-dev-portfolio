<template>
  <div id="hud-container">
    <button id="contact-btn" @click="toggleContactModal">Contact</button>
    <transition name="fade">
      <div v-if="showContactModal" id="contact-modal">
        <section id="contact-section">
          <h2>Contact</h2>
          <ul id="contact-list">
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

    <button id="info-btn" @click="toggleInfoModal">Info</button>
    <transition name="fade">
      <div v-if="showInfoModal" id="info-modal">
        <p>This is placeholder content.</p>
      </div>
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
  box-shadow: inset 0 0 2rem 0.1rem rgba(255, 255, 255, 0.4),
    0 0 4rem 4rem rgba(0, 0, 0, 0.8);
}

#contact-modal,
#info-modal,
#contact-modal li {
  background-color: rgba(29, 29, 29, 0.95);
  list-style-type: none;
  font-size: 1.5rem;
}

#contact-modal *,
#info-modal * {
  padding: 1rem;
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
