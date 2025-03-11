<script setup>
defineProps({
  color: {
    type: String,
    default: '#3788E5', // Color azul por defecto
  },
  size: {
    type: [String, Number],
    default: 24, // Tamaño por defecto 24x24
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_2184_596"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="size"
      :height="size"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2184_596)">
      <path
        d="M4 4H10V12H4V4Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 16H10V20H4V16Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 12H20V20H14V12Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 4H20V8H14V4Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
