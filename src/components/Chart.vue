<template>
    <v-chart class="overflow-hidden" :option="option" theme="dark" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { SVGRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { computed, ref } from 'vue'

import { useDayStore } from '@/stores/day'
import { storeToRefs } from 'pinia'
import type { ClientKeys } from '@/lib'

const store = useDayStore()
const { days } = storeToRefs(store)
const { fetchDays } = store

fetchDays()

use([
    SVGRenderer,
    GridComponent,
    LineChart,
    TooltipComponent,
    LegendComponent
])

const xAxisLabels = computed(() => days.value.map(day => day.date.slice(0, 10)))
const series = computed(() => {
    const clients = Object.keys(days.value[0] || {}).filter(key => !['date', 'slot_first', 'slot_last', 'slot_count'].includes(key)) as ClientKeys[]

    return clients.map(client => ({
        name: client.replace(/^./, string => string.toUpperCase()),
        data: days.value.map(day => day[client]),
        type: 'line',
        smooth: false
    }))
})

const option = ref({
    xAxis: [
        {
            type: 'category',
            data: xAxisLabels
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: (value: number) => {
                    return (value * 100).toFixed(2) + '%'
                }
            }
        }
    ],
    series,
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: (params: { seriesName: string; value: number }) => `${params.seriesName}: ${(params.value * 100).toFixed(2)}%`
    },
    legend: {
        show: true
    }
})
</script>
