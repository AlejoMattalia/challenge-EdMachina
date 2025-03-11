<script setup lang="ts">
import { colors } from '@/theme/Colors'
import type { Vaccination } from '@/types/VaccinationInterface'
import Button from './Button.vue'

defineProps<{
  data: Vaccination[]
}>()

const getTypeClass = (type: string) => {
  if (type === 'Core') return 'type-green'
  if (type === 'Noncore') return 'type-orange'
  if (type === 'Overdue') return 'type-red'
  return 'type-blue'
}
</script>

<template>
  <table :style="{ border: `1px solid ${colors.border}` }">
    <thead>
      <tr>
        <th :style="{ color: colors.textColor }">Name</th>
        <th>Type</th>
        <th>Date</th>
        <th class="veterinar">Veterinar</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="vaccination in data.slice(0, 4)"
        :key="vaccination.id"
        :style="{ border: `1px solid ${colors.border}` }"
      >
        <td style="font-size: 14px">{{ vaccination.name }}</td>
        <td>
          <div :class="['type', getTypeClass(vaccination.type)]">
            {{ vaccination.type }}
          </div>
        </td>
        <td style="font-size: 14px">{{ vaccination.date }}</td>
        <td class="veterinar">
          <div v-if="vaccination.type === 'Overdue'" class="veterinar-position">
            <Button
              :text="vaccination.veterinar"
              bgColor="#3788E5"
              width="148px"
              height="38px"
              :selected="true"
            />
          </div>
          <div
            v-else
            class="veterinar-text veterinar-position"
            :style="{ border: `1px solid ${colors.border}` }"
          >
            {{ vaccination.veterinar }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;
  border-radius: 10px 10px 0 0;
}

thead {
  background-color: #f2f5fa;
  height: 69px;
}

th {
  padding-left: 30px;
  text-align: left;
  color: #0b1c33;
  min-width: 80px;
  font-weight: 400;
}

td {
  text-align: left;
  padding-left: 30px;
  color: #0b1c33;
  min-width: 80px;
  font-weight: 400;
  background-color: #fff;
  height: 86px;
}

.veterinar {
  text-align: right;
  padding-right: 30px;
  padding-left: 0px;
  max-width: 200px;

  .veterinar-position {
    position: relative;
    left: 22px;
  }

  .veterinar-text {
    width: 148px;
    height: 38px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.type {
  text-align: center;
  width: 87px;
  height: 37px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.type-red {
  background-color: #fcebef;
  border: 1px solid #f7c1ce;
  color: #d03258;
}

.type-green {
  background-color: #eaf8f1;
  border: 1px solid #bde8d3;
  color: #27a468;
}

.type-orange {
  background-color: #fcf5eb;
  border: 1px solid #f7e1c1;
  color: #f2a735;
}

.type-blue {
  background-color: #e1ecff;
  border: 1px solid #a3c4f3;
  color: #0b5ed7;
}
</style>
