<script setup lang="ts">
import { ref } from 'vue'
import { colors } from '@/theme/Colors'
import type { Activity } from '@/types/ActivityInterface'
import type { Vaccination } from '@/types/VaccinationInterface'
import type { Category } from '@/types/GraphicInterface'

const { selectOption, selectedValue } = defineProps<{
  data: Activity[] | Vaccination[] | Category[]
  options: string[]
  selectOption: (text: string) => void
  selectedValue: string
}>()

const isOpen = ref<boolean>(false)

const toggleDropdown = (): void => {
  isOpen.value = !isOpen.value
}
defineEmits<{
  (e: 'update:selectedValue', value: string): void
}>()
</script>

<template>
  <div class="custom-select">
    <div
      class="select-box"
      :style="{ border: `1px solid ${colors.border}` }"
      @click="toggleDropdown"
    >
      <span class="selected">{{ selectedValue }}</span> <span class="arrow">▼</span>
      <ul v-show="isOpen" class="options">
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  width: 115px;
  z-index: 200;
}

.select-box {
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  height: 38px;
  border-radius: 8px;
  padding: 10px;

  .selected {
    position: relative;
    bottom: 3px;
  }
  .arrow {
    position: absolute;
    right: 5px;
    top: 8px;
    font-size: 14px;
    color: #3788e5;
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 2px;

    li {
      padding: 10px;
      cursor: pointer;
      position: relative;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
