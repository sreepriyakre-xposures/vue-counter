<template>
    <span class="count">{{ count }}</span>
</template>

<script setup>
  defineProps(["count"]);
</script>

  <style scoped>
  .count {
    font-size: 24px;
    margin: 0 15px;
  }
  </style>
