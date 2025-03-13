<script setup lang="ts">
import { colors } from '@/theme/Colors'
import Select from '../common/Select.vue'
import Button from '../common/Button.vue'
import StressIcon from '../icons/StressIcon.vue'
import PulseIcon from '../icons/PulseIcon.vue'
import CaloriesIcon from '../icons/CaloriesIcon.vue'
import TemperatureIcon from '../icons/TemperatureIcon.vue'
import { ref, watchEffect } from 'vue'
import Graphic from '../common/Graphic.vue'
// import { categories } from '@/api/graphicData'
import { useFetch } from '@/composables/useFetch'
import type { Category, Data, GraphicInterface } from '@/types/GraphicInterface'
import Error from '../common/Error.vue'

const { data, error, loading } = useFetch<GraphicInterface>('graphic')
const categories = ref<Category[]>([])
const seriesData = ref<Data[]>([])

const selectedValueType = ref('stress')
const selectValueDate = ref('Monthly')

const arrayData = ref<number[]>([])
const arrayCategory = ref<string[]>([])

// Actualización reactiva
watchEffect(() => {
  if (data.value) {
    categories.value = data.value[0]?.categories || []
    seriesData.value = data.value[0]?.data || []
  }
})

// Actualización reactiva
watchEffect(() => {
  arrayData.value = seriesData.value.find((d) => d.name === selectedValueType.value)?.values || []
  arrayCategory.value =
    categories.value.find((c) => c.name.toLowerCase() === selectValueDate.value.toLowerCase())
      ?.values || []
})

const selectType = (text: string) => {
  selectedValueType.value = text
  arrayData.value = [...(seriesData.value.find((d) => d.name === text)?.values || [])]
}

const selectDate = (text: string) => {
  selectValueDate.value = text
  arrayCategory.value = [...(categories.value.find((cat) => cat.name === text)?.values || [])]
}
</script>

<template>
  <n-skeleton v-if="loading" height="579px" width="800px" :sharp="false" />
  <section v-else class="statistics" :style="{ border: `1px solid ${colors.border}` }">
    <div v-if="error">
      <Error :error="error" />
    </div>
    <div v-else>
      <header class="statistics-header">
        <p>STATISTICS</p>
        <Select
          :options="['Daily', 'Monthly', 'Yearly']"
          :selectedValue="selectValueDate"
          :data="categories"
          :selectOption="selectDate"
        />
      </header>

      <main class="statistics-main" :style="{ border: `1px solid ${colors.border}` }">
        <Button
          @click="selectType('stress')"
          text="Stress level"
          bgColor="#3788E5"
          height="48px"
          width="165px"
          :icon="StressIcon"
          :iconColor="selectedValueType === 'stress' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
          :selected="selectedValueType === 'stress'"
        />

        <Button
          @click="selectType('pulse')"
          text="Pulse"
          bgColor="#3788E5"
          height="48px"
          width="165px"
          :icon="PulseIcon"
          :iconColor="selectedValueType === 'pulse' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
          :selected="selectedValueType === 'pulse'"
        />

        <Button
          @click="selectType('temperature')"
          text="Temperature"
          bgColor="#3788E5"
          height="48px"
          width="165px"
          :icon="TemperatureIcon"
          :iconColor="selectedValueType === 'temperature' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
          :selected="selectedValueType === 'temperature'"
        />

        <Button
          @click="selectType('calories')"
          text="Calories"
          bgColor="#3788E5"
          height="48px"
          width="165px"
          :icon="CaloriesIcon"
          :iconColor="selectedValueType === 'calories' ? '#fff' : 'rgba(11, 28, 51, 0.7)'"
          iconSize="24"
          :selected="selectedValueType === 'calories'"
        />
      </main>

      <div style="margin-top: 20px">
        <Graphic :categoriesData="arrayCategory" :seriesData="arrayData" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.statistics {
  width: 800px;
  height: 579px;
  border: 1px solid red;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;

  .statistics-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    p {
      color: rgba(11, 28, 51, 0.7);
      font-size: 16px;
    }
  }

  .statistics-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-radius: 12px;
  }
}
</style>
