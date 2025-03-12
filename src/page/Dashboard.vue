<script setup lang="ts">
import Chat from '@/components/dashboard/Chat.vue'
import Percentage from '@/components/dashboard/Percentage.vue'
import Statistics from '@/components/dashboard/Statistics.vue'
import Vaccination from '@/components/dashboard/Vaccination.vue'
</script>

<template>
  <main class="dashboard">
    <div class="percentage-statistics">
      <Percentage />
      <Statistics />
    </div>

    <div class="vaccination-chat">
      <Vaccination />
      <Chat />
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 5px;

  .percentage-statistics {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .vaccination-chat {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
