<script setup lang="ts">
import { colors } from '@/theme/Colors'
import Select from '../common/Select.vue'
import { defineProps, ref, onMounted, computed } from 'vue'
import type { Activity } from '@/types/ActivityInterface'

const { activities, title, color } = defineProps<{
  title: string
  color: string
  activities: Activity[]
}>()

const progress = ref<number>(0)
const selectedValue = ref<string>('Weekly')

// Función para seleccionar actividad
const selectActivity = (text: string): void => {
  selectedValue.value = text
  progress.value = activities.find((activity) => activity.text === text)?.percentage || 0
}

// Asignar el valor inicial cuando el componente se monta
onMounted(() => {
  progress.value =
    activities.find((activity) => activity.text === selectedValue.value)?.percentage || 0
})

const options = computed(() => activities.map((activity) => activity.text))
</script>

<template>
  <main class="percentage-cards" :style="{ border: `1px solid ${colors.border}` }">
    <header class="percentage-cards-header">
      <p>{{ title }}</p>
      <Select
        :data="activities"
        :options="options"
        :selectOption="selectActivity"
        :selectedValue="selectedValue"
      />
    </header>

    <div class="progress-container">
      <svg class="progress-ring" width="198" height="198" viewBox="0 0 100 100">
        <circle class="progress-background" cx="50" cy="50" r="45"></circle>
        <circle
          class="progress-bar"
          cx="50"
          cy="50"
          r="45"
          :stroke-dasharray="Math.PI * 2 * 45"
          :stroke-dashoffset="Math.PI * 2 * 45 * (1 - progress / 100)"
          :stroke="color"
        ></circle>
      </svg>
      <div class="progress-text">{{ progress }}%</div>
    </div>
  </main>
</template>

<style scoped>
.percentage-cards {
  width: 278px;
  height: 330px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 30px;

  .percentage-cards-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
      font-size: 16px;
      color: rgba(11, 28, 51, 0.7);
    }
  }

  .progress-container {
    width: 198px;
    height: 198px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .progress-ring {
      transform: rotate(-90deg);

      .progress-background {
        fill: none;
        stroke: #f2f5fa;
        stroke-width: 8;
      }

      .progress-bar {
        fill: none;
        stroke-width: 8;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.5s ease;
      }
    }
    .progress-text {
      position: absolute;
      font-size: 40px;
      font-weight: normal;
    }
  }
}
</style>
