<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

interface SeriesInterface {
  name: string
  data: number[]
}

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    seriesData: {
      type: Array as PropType<number[]>,
      required: true,
    },
    categoriesData: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    // ✅ Convertir `series` en ref reactiva
    const series = ref<SeriesInterface[]>([{ name: 'Desktops', data: props.seriesData }])

    const chartOptions = ref({
      chart: {
        height: 350,
        type: 'line' as const,
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'straight' as const },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: props.categoriesData,
      },
    })

    // 🎯 **Actualizar `series` cuando `seriesData` cambie**
    watch(
      () => props.seriesData,
      (newData) => {
        series.value = [{ name: 'Desktops', data: newData }]
      },
    )

    // 🎯 **Actualizar `chartOptions.xaxis.categories` cuando `categoriesData` cambie**
    watch(
      () => props.categoriesData,
      (newCategories) => {
        chartOptions.value = { ...chartOptions.value, xaxis: { categories: newCategories } }
      },
    )

    return { series, chartOptions }
  },
})
</script>

<template>
  <div id="app">
    <div id="chart">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
