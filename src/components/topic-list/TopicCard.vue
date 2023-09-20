<template>
  <li>
    <div :class="cardClass">
      <div class="h3-container">
        <h3 class="card-title">{{ topic }}</h3>
      </div>
      <div class="card-btn-container">
        <button class="card-btn" @click="openModal">Read</button>
      </div>
    </div>

    <section class="modal-container">
      <div
        v-if="showModal"
        :class="
          viewportIsVertical
            ? 'vertical-modal-overlay'
            : 'horizontal-modal-overlay'
        "
      >
        <div
          :class="viewportIsVertical ? 'vertical-modal' : 'horizontal-modal'"
        >
          <article>
            {{ brief }}
          </article>
          <button @click="closeModal" id="close-btn">Close</button>
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
    };
  },
};
</script>

<style scoped>
li:has(.card-vertical) {
  margin: 2rem;
}

.vertical-modal-overlay {
  transform: translateY(-30vh);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
}

.horizontal-modal-overlay {
  position: relative;
}

.horizontal-modal-overlay,
.vertical-modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical-modal,
.horizontal-modal {
  box-shadow: 0 0 5rem 0.5rem rgba(255, 255, 255, 0.1),
    inset 0 0 4rem 0.2rem rgba(255, 255, 255, 0.2);
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.vertical-modal {
  position: fixed;
}

.horizontal-modal {
  position: relative;
}

.vertical-modal *,
.horizontal-modal * {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card {
  box-shadow: inset 0 0 1rem 0.1rem rgba(0, 0, 0, 0.3),
    0 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.1);
  min-width: 120px;
  width: 30rem;
  max-width: 25vw;
  height: 20vh;
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  background-color: #637caa;
}

.card-vertical {
  display: flex-start;
  flex-direction: column;
  height: 25vh;
  padding: 0.5rem;
}

.card:hover {
  box-shadow: inset 0 0 1rem 0.5rem rgba(0, 0, 0, 0.8),
    0 0 1rem 0.1rem rgba(255, 255, 255, 0.5);
  background-color: #2c2c2c;
  transform: translateY(-5px);
}

.card:hover .card-button {
  color: rgb(231, 231, 231);
}

.card-title {
  color: white;
  font-weight: 700;
  text-transform: uppercase;
}

.card-btn {
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-weight: 700;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
}

#close-btn {
  margin-top: 2rem;
}

article {
  text-align: center;
  font-size: min(2rem, 12pt);
}

.h3-container,
.card-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card > .h3-container {
  margin-top: 0;
  padding-left: 1rem;
}

.card-vertical > .h3-container {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
}
</style>
