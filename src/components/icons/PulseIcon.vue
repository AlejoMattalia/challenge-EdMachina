<script setup lang="ts">
defineProps<{
  color: string
  size: string | number
}>()
</script>

<template>
  <svg
    :width="size"
    :height="Number(size) - 1"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_2184_744"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="size"
      :height="Number(size) - 1"
    >
      <path d="M24.125 0H0.125V24H24.125V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2184_744)">
      <path
        d="M3.125 12H7.625L9.125 6L13.125 18L15.125 9L16.625 12H21.125"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
