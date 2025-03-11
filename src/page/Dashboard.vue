<script setup lang="ts">
import Chat from '@/components/dashboard/Chat.vue'
import Percentage from '@/components/dashboard/Percentage.vue'
import Vaccination from '@/components/dashboard/Vaccination.vue'
</script>

<template>
  <main class="dashboard">
    <Percentage />
    <Vaccination />
    <Chat />
  </main>
</template>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
}
</style>
