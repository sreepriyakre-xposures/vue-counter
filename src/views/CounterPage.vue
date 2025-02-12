<template>
  <div class="counter-container">
    <DecrementButton @decrement="decrementCount" />
    <CounterDisplay :count="count" />
    <IncrementButton @increment="incrementCount" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import IncrementButton from "@/components/IncrementButton.vue";
import DecrementButton from "@/components/DecrementButton.vue";

const count = ref(0);

const incrementCount = () => {
  count.value++;
};

const decrementCount = () => {
  count.value--;
};
</script>

<style scoped>
.counter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
}
</style>
