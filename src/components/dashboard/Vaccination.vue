<script setup lang="ts">
import { colors } from '@/theme/Colors'
import SearchNameVaccination from '../common/SearchNameVaccination.vue'
import Select from '../common/Select.vue'
import { ref } from 'vue'
import { vaccinationData } from '@/api/vaccinationData'
import Table from '../common/Table.vue'

const selectedValue = ref<string>('By Type')
const options = ref<string[]>(['By Type', 'Overdue', 'Core', 'Noncore'])
const vaccination = ref(vaccinationData)

const selectType = (text: string) => {
  selectedValue.value = text

  if (text === 'By Type') {
    return (vaccination.value = vaccinationData)
  }

  const newVaccinationData = vaccinationData.filter((vaccination) => vaccination.type === text)
  vaccination.value = newVaccinationData
}

const searchForName = (name: string) => {
  if (!name.trim()) {
    vaccination.value = vaccinationData // Si el input está vacío, restauramos los datos originales
    return
  }
  vaccination.value = vaccinationData.filter((v) =>
    v.name.toLowerCase().includes(name.toLowerCase()),
  )
}
</script>

<template>
  <section class="vaccination" :style="{ border: `1px solid ${colors.border}` }">
    <header class="vaccination-header">
      <p>VACCINATION SCHEDULE</p>

      <SearchNameVaccination :searchForName="searchForName" />

      <Select
        :selectedValue="selectedValue"
        :options="options"
        :selectOption="selectType"
        :data="vaccination"
      />
    </header>

    <Table :data="vaccination" />
  </section>
</template>

<style>
.vaccination {
  width: 676px;
  border: 1px solid red;
  height: 531px;
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;

  .vaccination-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: rgba(11, 28, 51, 0.7);
      font-size: 16px;
    }
  }
}
</style>
