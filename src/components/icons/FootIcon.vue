<script setup lang="ts">
defineProps<{
  color: string
  size: string | number
}>()
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
      id="mask0_2184_606"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="size"
      :height="size"
    >
      <path d="M24 0H0V24H24V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_2184_606)">
      <path
        d="M14.7 13.5C13.6 11.5 13.259 11 12 11C10.741 11 10.264 11.755 9.16401 13.747C8.22201 15.45 6.31801 15.592 5.84301 17.038C5.74601 17.303 5.69801 17.715 5.70001 18C5.70001 19.176 6.48701 20 7.50001 20C8.75901 20 10.5 19 12 19C13.5 19 15.241 20 16.5 20C17.513 20 18.3 19.177 18.3 18C18.3 17.715 18.251 17.303 18.154 17.038C17.679 15.587 15.642 15.203 14.7 13.5Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.188 8.082C20.0595 8.028 19.9215 8 19.782 8H19.767C19.032 8.012 18.207 8.75 17.774 9.866C17.255 11.201 17.494 12.566 18.312 12.918C18.441 12.973 18.579 13 18.718 13C19.457 13 20.293 12.258 20.729 11.134C21.245 9.799 21.001 8.434 20.188 8.082Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47401 9C9.52901 9 9.58301 9 9.63701 8.989C10.581 8.861 11.17 7.643 10.957 6.267C10.754 4.97 9.91001 4 9.02501 4C8.97001 4 8.91601 4 8.86201 4.011C7.91801 4.139 7.32901 5.357 7.54201 6.733C7.74601 8.026 8.58901 9 9.47401 9Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.456 6.733C16.67 5.357 16.081 4.139 15.136 4.011C15.0823 4.004 15.0282 4 14.974 4C14.089 4 13.246 4.97 13.044 6.267C12.83 7.643 13.419 8.861 14.364 8.989C14.418 8.996 14.472 9 14.526 9C15.411 9 16.256 8.026 16.456 6.733Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.69001 12.918C6.50601 12.566 6.74401 11.199 6.22601 9.866C5.79001 8.742 4.95501 8 4.21701 8C4.07701 8 3.94001 8.027 3.81001 8.082C2.99401 8.434 2.75601 9.801 3.27401 11.134C3.71001 12.258 4.54501 13 5.28301 13C5.42301 13 5.56001 12.973 5.69001 12.918Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
