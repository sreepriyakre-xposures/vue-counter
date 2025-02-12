<template>
  <button @click="emit('increment')">+</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["increment"]);
</script>

<style scoped>
button {
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: #28a745;
  color: white;
  border-radius: 5px;
}

button:hover {
  background: #218838;
}
</style>
