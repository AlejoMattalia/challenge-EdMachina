<script setup lang="ts">
defineProps<{
  error: string
}>()
</script>

<template>
  <div class="error">{{ error }}</div>
</template>

<style>
.error {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e53761;
  font-size: 16px;
}
</style>
