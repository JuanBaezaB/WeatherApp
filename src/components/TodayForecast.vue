<template>
    <div v-if="weatherStore.weeklyWeatherData" class="grid grid-cols-7 rounded-3xl h-full ">
        <template v-for="(day, index) in weatherStore.weeklyWeatherData" :key="day.dt">
        </template>
    </div>
</template>
<script setup>
import { useWeatherStore } from '../store/weather';
import Divider from './Divider.vue';
const weatherStore = useWeatherStore();
weatherStore.fetchWeeklyWeatherData('London');

</script>
   
