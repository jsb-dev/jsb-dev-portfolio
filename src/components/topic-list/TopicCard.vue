<template>
  <li>
    <div :class="cardClass">
      <div class="h2-container">
        <h2 class="card-title">{{ topic }}</h2>
      </div>
      <div class="card-btn-container">
        <button class="card-btn" @click="openModal">Read</button>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <article>
            {{ brief }}
          </article>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    topic: {
      type: String,
      required: true
    },
    brief: {
      type: String,
      required: true
    }
  },
  setup() {
    const store = useStore();
    const viewportIsVertical = computed(() => store.state.viewportIsVertical);

    const cardClass = computed(() => {
      return {
        card: true,
        'card-vertical': viewportIsVertical.value
      };
    });

    const showModal = ref(false);

    const openModal = () => {
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      openModal,
      closeModal,
      cardClass
    };
  }
};
</script>

<style scoped>
.card {
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 1rem .1rem rgba(0, 0, 0, 0.3), 0 .5rem 1rem .5rem rgba(0, 0, 0, 0.1);
  min-height: 15vh;
  min-width: min(25rem, 24vw);
  position: relative;
  margin: 1.5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d4d4d4;
}

.card-vertical {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-evenly;
  width: 5rem;
  height: 25rem;
  padding: 1rem;
}

.card:hover {
  box-shadow: inset 0 0 1rem .5rem rgba(0, 0, 0, 0.8);
  color: white;
  background-color: #2c2c2c;
  border-radius: 2rem;
  transform: translateY(-5px);
}

.card:hover .card-title {
  color: rgb(231, 231, 231);
}

.card-title {
  color: #333;
}

.card-btn {
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;
  padding: 0.5rem 1rem;
}

.modal-overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.modal {
  background: white;
  padding: 2rem;
  box-shadow: 0 .5rem 2rem .5rem rgba(0, 0, 0, 0.3);
  z-index: 3;
  width: 30rem;
  height: 20rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.h2-container, .card-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
}

.card > .h2-container {
  padding-left: 1rem;
}

.card-vertical > .h2-container {
  padding-left: 0;
}

</style>
