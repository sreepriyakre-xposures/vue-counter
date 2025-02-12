<template>
  <button @click="emit('decrement')">-</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["decrement"]);
</script>

<style scoped>
button {
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: #dc3545;
  color: white;
  border-radius: 5px;
}

button:hover {
  background: #c82333;
}
</style>
