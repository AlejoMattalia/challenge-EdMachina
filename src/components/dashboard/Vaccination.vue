<script setup lang="ts">
import { colors } from '@/theme/Colors'
import SearchNameVaccination from '../common/SearchNameVaccination.vue'
import Select from '../common/Select.vue'
import { onMounted, ref, unref, watchEffect } from 'vue'
// import { vaccinationData } from '@/api/vaccinationData'
import Table from '../common/Table.vue'
import { useFetch } from '@/composables/useFetch'
import type { Vaccination } from '@/types/VaccinationInterface'
import Error from '../common/Error.vue'

const { data, error, loading } = useFetch<Vaccination>('vaccination')

const selectedValue = ref<string>('By Type')
const options = ref<string[]>(['By Type', 'Overdue', 'Core', 'Noncore'])
const vaccination = ref<Vaccination[]>([])

watchEffect(() => {
  if (data.value) {
    vaccination.value = data.value
  }
})

const selectType = (text: string) => {
  selectedValue.value = text

  const vaccinationData = unref(data) || []

  if (text === 'By Type') {
    vaccination.value = vaccinationData
    return
  }

  const newVaccinationData = vaccinationData.filter((v) => v.type === text)
  vaccination.value = newVaccinationData
}

const searchForName = (name: string) => {
  const vaccinationData = unref(data) || []

  if (!name.trim()) {
    vaccination.value = vaccinationData
    return
  }
  vaccination.value = vaccinationData.filter((v) =>
    v.name.toLowerCase().includes(name.toLowerCase()),
  )
}
</script>

<template>
  <n-skeleton v-if="loading" height="531px" width="620px" :sharp="false" />
  <section v-else class="vaccination" :style="{ border: `1px solid ${colors.border}` }">
    <div v-if="error">
      <Error :error="error" />
    </div>
    <div v-else>
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
    </div>
  </section>
</template>

<style>
.vaccination {
  width: 620px;
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
