<script setup lang="ts">
import PercentageCards from '../common/PercentageCard.vue'
import { useFetch } from '@/composables/useFetch'
import type { DataInterface, Percentage } from '@/types/ActivityInterface'
import Error from '../common/Error.vue'
import { ref, watchEffect } from 'vue'

const { data, error, loading } = useFetch<Percentage>('activities')

const activities = ref<DataInterface[]>([])
const Sleep = ref<DataInterface[]>([])
const Wellness = ref<DataInterface[]>([])

watchEffect(() => {
  if (data.value && data.value.length > 0) {
    activities.value = data.value[0]?.activities || []
    Sleep.value = data.value[0]?.sleep || []
    Wellness.value = data.value[0]?.wellness || []
  }
})
</script>

<template>
  <n-skeleton v-if="loading" height="330px" width="800px" :sharp="false" />
  <section v-else class="percentage">
    <div v-if="error">
      <Error :error="error" />
    </div>

    <div v-else class="percentage-cards">
      <PercentageCards title="ACTIVITY" color="#E63950" :data="activities" />
      <PercentageCards title="SLEEP" color="#27A468" :data="Sleep" />
      <PercentageCards title="WELNESS" color="#F2A735" :data="Wellness" />
    </div>
  </section>
</template>

<style scoped>
.percentage {
  max-width: 800px;
  width: 100%;

  .percentage-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
}
</style>
