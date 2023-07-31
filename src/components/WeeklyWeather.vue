<template>
    <!-- <div v-if="weatherStore.weeklyWeatherData"
            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 mx-10">
            <div v-for="day in weatherStore.weeklyWeatherData" :key="day.dt"
                class="p-2 bg-white text-center rounded shadow-sm transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100">
                <p>{{ day.formattedDate }}</p>
                <div class="flex justify-center">
                    <img class="w-20" :src="`/weather/fill/openweathermap/${day.weather[0].icon}.svg`" />
                </div>

                <p>{{ Math.trunc(day.temp.max) }}°/{{ Math.trunc(day.temp.min) }}°</p>
                <p>{{ day.weather[0].description }}</p>
            </div>
        </div> -->

    <div class="flex flex-col h-full">
        <div class="">
            <p class="uppercase font-semibold">7-Day forecast</p>
        </div>
        <div class="h-full">
            <div v-if="weatherStore.weeklyWeatherData" class="grid grid-rows rounded-3xl h-full ">
                <template v-for="(day, index) in weatherStore.weeklyWeatherData" :key="day.dt">
                    <div class="flex justify-between items-center gap-1">
                        <div class="w-9">
                            <span class="text-md text-gray-700">{{ day.formattedDate }}</span>
                        </div>

                        <div class="flex items-center justify-center ">
                            <img class="w-14 h-14" :src="`weather/fill/openweathermap/${day.weather[0].icon}.svg`" alt="">

                        </div>

                        <div class="flex items-center justify-center hidden sm:flex lg:hidden">
                            <img class="w-6 h-6 " :src="`weather/fill/all/raindrop.svg`" alt="">

                            <span class="font-semibold">{{ day.humidity }}%</span>
                        </div>

                        <div class="w-28 sm:w-36 lg:w-20 xl:w-36">
                            <span> {{ day.weather[0].description }}</span>
                        </div>

                        <div class="w-14">
                            <span class="text-md text-gray-700">{{ Math.round(day.temp.min) }}&deg;/</span>
                            <span class="text-md text-gray-700">{{ Math.round(day.temp.max) }}&deg;</span>
                        </div>
                    </div>

                    <div v-if="index !== weatherStore.weeklyWeatherData.length - 1"
                        class="flex items-center justify-center ">
                        <div class="border w-full rounded-xl bg-neutral-100 opacity-100 dark:opacity-50"></div>
                    </div>
                </template>
                <!-- <div v-for="day in weatherStore.weeklyWeatherData" :key="day.dt" class="flex justify-between items-center gap-1">
            <div class="w-9">
                <span class="text-md text-gray-700">{{ day.formattedDate }}</span>
            </div>

            <div class="flex items-center justify-center ">
                <img class="w-14 h-14" :src="`weather/fill/openweathermap/${day.weather[0].icon}.svg`" alt="">

            </div>


            <div class="flex items-center justify-center hidden sm:flex lg:hidden">
                <img class="w-6 h-6 " :src="`weather/fill/all/raindrop.svg`" alt="">

                <span class="font-semibold">{{ day.humidity }}%</span>
            </div>

            <div class="w-28 sm:w-36 lg:w-20 xl:w-36">
                <span> {{ day.weather[0].description }}</span>
            </div>

            <div class="w-14">
                <span class="text-md text-gray-700">{{ Math.round(day.temp.min) }}&deg;/</span>
                <span class="text-md text-gray-700">{{ Math.round(day.temp.max) }}&deg;</span>
            </div>
        </div> -->

            </div>
        </div>
    </div>
</template>

<script setup>
import { useWeatherStore } from '../store/weather';
import Divider from './Divider.vue';
const weatherStore = useWeatherStore();
weatherStore.fetchWeeklyWeatherData('London');

</script>
   
