import { type Day } from '@/lib'
import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useDayStore = defineStore('day', () => {
    const days: Ref<Day[]> = ref([])

    async function fetchDays() {
        const response = await (await fetch('https://client.codes/data')).json()
        days.value = response
    }

    return { days, fetchDays }
})
