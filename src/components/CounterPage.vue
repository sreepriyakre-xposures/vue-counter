<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {count.value++;
};

const decrement = () => {count.value--;
};
</script>

<template>
    <div class="container">
  <div class="counter">
    <button @click="decrement">-</button>
    <span>{{  count }}</span>
    <button @click="increment">+</button>
  </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;
}
.counter {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  background: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
button {
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}
</style>
