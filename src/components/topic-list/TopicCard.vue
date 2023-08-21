<template>
    <li>
      <div class="card">
        <h2>{{ topic }}</h2>
        <button @click="openModal">Open</button>
      </div>
  
      <div v-if="showModal" class="modal">
        <article>
          {{ brief }}
        </article>
        <button @click="closeModal">Close</button>
      </div>
    </li>
  </template>
  
  <script>
  import { ref } from 'vue';
  
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
        closeModal
      };
    }
  };
  </script>
  
  <style scoped>
  /* Styling for the card and modal here */
  </style>
  