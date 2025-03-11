<script setup lang="ts">
import { defineProps } from 'vue'
import counter from './Counter.vue'
import persons from '@/assets/img/persons.png'

defineProps<{
  text: string
  redirect?: string | null
  bgColor?: string
  selected?: boolean
  width?: string
  height?: string
  icon?: Record<string, any> | null
  iconColor?: string
  iconSize?: string | number
  counterView?: boolean
  imageView?: boolean
}>()
</script>

<template>
  <component
    :is="redirect ? 'RouterLink' : 'none'"
    v-bind="redirect ? { to: redirect, style: { textDecoration: 'none' } } : {}"
  >
    <button
      :class="{ selected }"
      :style="{
        width: width,
        height: height,
        backgroundColor: selected ? bgColor : 'transparent',
        color: selected ? '#fff' : 'rgba(11, 28, 51, 0.7)',
      }"
    >
      <component v-if="icon" :is="icon" :color="iconColor" :size="iconSize" class="icon" />
      {{ text }}
      <div class="right-content">
        <counter v-if="counterView" :count="2" />
        <img v-if="imageView" :src="persons" alt="" />
      </div>
    </button>
  </component>
</template>

<style scoped>
button {
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: none;
  padding-left: 25px;
  padding-right: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(55, 136, 229, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
  .icon {
    margin-right: 8px;
    transition: all 0.3s ease;
  }

  .right-content {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>
