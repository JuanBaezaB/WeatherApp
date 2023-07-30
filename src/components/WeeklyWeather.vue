<template>
    <div>
        <h1 class="uppercase">7-Day Weather</h1>
        <div v-if="weatherStore.weeklyWeatherData"
            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 mx-10">
            <div v-for="day in weatherStore.weeklyWeatherData" :key="day.dt" class="p-2 bg-white text-center rounded shadow-sm transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100">
                <p>{{ day.formattedDate }}</p>
                <div class="flex justify-center">
                    <img class="w-20" :src="`/weather/fill/openweathermap/${day.weather[0].icon}.svg`" />
                </div>

                <p>{{ Math.trunc(day.temp.max) }}°/{{ Math.trunc(day.temp.min) }}°</p>
                <!-- <p>{{ day.weather[0].description }}</p> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWeatherStore } from '../store/weather';
const weatherStore = useWeatherStore();
weatherStore.fetchWeeklyWeatherData('London');

</script>