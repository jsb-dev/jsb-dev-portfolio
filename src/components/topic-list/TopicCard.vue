<template>
  <li>
    <div :class="cardClass">
      <div class="h3-container">
        <h3 class="card-title">{{ topic }}</h3>
      </div>
      <div class="card-btn-container">
        <button
          class="card-btn"
          v-if="!showModal"
          :id="'open-btn'"
          @click="openModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 576 512"
          >
            <path
              d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"
              fill="rgb(185, 208, 237)"
            />
          </svg>
        </button>
        <button
          class="card-btn"
          v-if="showModal"
          :id="'close-btn'"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 384 512"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              fill="rgb(185, 208, 237)"
            />
          </svg>
        </button>
      </div>
    </div>

    <section class="modal-container">
      <div
        v-if="showModal"
        :class="viewportIsVertical && 'vertical-modal-overlay'"
      >
        <div
          :class="viewportIsVertical ? 'vertical-modal' : 'horizontal-modal'"
        >
          <button
            v-if="viewportIsVertical"
            class="close-button"
            @click="closeModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              viewBox="0 0 384 512"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                fill="#fff"
              />
            </svg>
          </button>
          <article>
            {{ brief }}
          </article>
        </div>
      </div>
    </section>
  </li>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    topic: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const viewportIsVertical = computed(() => store.state.viewportIsVertical);
    const viewportIsPortable = computed(() => store.state.viewportIsPortable);

    const cardClass = computed(() => {
      return {
        card: true,
        'card-vertical': viewportIsVertical.value,
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
      cardClass,
      viewportIsVertical,
      viewportIsPortable,
    };
  },
};
</script>

<style scoped>
article {
  text-align: center;
  padding: 0 1rem;
  overflow: hidden;
}

.card {
  box-shadow: inset 0 0 1rem 0.1rem rgba(0, 0, 0, 0.3),
    0 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(60, 58, 85);
  width: 30rem;
  min-width: fit-content;
  border-radius: 1rem;
  overflow: hidden;
}

.card-vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30rem;
  width: 15rem;
}

.h3-container,
.card-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

.card-title {
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.vertical-modal-overlay {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.vertical-modal {
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.horizontal-modal {
  width: 100%;
  padding: 0 1rem;
  height: fit-content;
}

.close-button {
  position: fixed;
  top: 1rem;
  left: 1rem;
}
</style>
