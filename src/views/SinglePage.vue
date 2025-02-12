<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <div class="container">
    <div class="counter">
      <button class="decrement" @click="decrement">-</button>
      <span class="count">{{ count }}</span>
      <button class="increment" @click="increment">+</button>
    </div>
  </div>
</template>

<style scoped>
/* Centering the counter */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  background: #f4f4f4; */
}

/* Counter box styling */
.counter {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 24px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

/* Button styling */
button {
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
}

/* Decrement button */
.decrement {
  background: #4b35dc;
}

.decrement:hover {
  background: #235ac8;
}

/* Increment button */
.increment {
  background: #ff00cc;
}

.increment:hover {
  background: #ea25bc;
}

/* Count text */
.count {
  font-size: 28px;
  font-weight: bold;
}
</style>
