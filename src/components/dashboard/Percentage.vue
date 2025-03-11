<script setup lang="ts">
import { activities, Sleep, Wellness } from '@/api/activitiesData'
import PercentageCards from '../common/PercentageCard.vue'
</script>

<template>
  <section class="percentage">
    <PercentageCards title="ACTIVITY" color="#E63950" :activities="activities" />
    <PercentageCards title="SLEEP" color="#27A468" :activities="Sleep" />
    <PercentageCards title="WELNESS" color="#F2A735" :activities="Wellness" />
  </section>
</template>

<style scoped>
.percentage {
  display: flex;
  max-width: 882px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
