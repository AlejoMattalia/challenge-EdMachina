<script setup>
defineProps({
  count: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: #e53761;
  color: #fff;
}
</style>
