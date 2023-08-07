<template>
    <div class="p-2 h-full">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>adas</div>
            <div v-if="weatherStore.todayWeatherData" class=" flex flex-col justify-center items-center text-center p-2">
                <div class="text-md font-bold flex flex-col text-gray-900"><span class="uppercase">Today</span>
                <span class="font-normal text-gray-700 text-sm">{{  }}</span>
            </div>
            <div class=" flex items-center justify-center">
                <img class="w-72 h-72" :src="`weather/fill/openweathermap/${weatherStore.todayWeatherData.weather[0].icon}.svg`" alt="">
            </div>
            <p class="text-gray-700 mb-2">{{ weatherStore.todayWeatherData.weather[0].description }}</p>
            <div class="text-3xl font-bold text-gray-900 mb-6">{{ Math.round(weatherStore.todayWeatherData.main.temp) }}º</div>
            <p class="text-gray-500 text-sm">{{ weatherStore.todayWeatherData.name }}, Chile</p>
            </div>
        </div>

        <div>
            <p>{{ greeting }}</p>
        </div>

        <div class="m-2 text-center">
            <p class="font-semibold uppercase text-4xl md:text-2xl">{{ currentTime }}</p>
            <p class="text-xs">{{ currentDate }}</p>
        </div>
        <!-- <div v-if="weatherStore.todayWeatherData" class=" flex flex-col justify-center items-center text-center p-2">
            <div class="text-md font-bold flex flex-col text-gray-900"><span class="uppercase">Today</span>
                <span class="font-normal text-gray-700 text-sm">{{  }}</span>
            </div>
            <div class=" flex items-center justify-center">
                <img class="w-72 h-72" :src="`weather/fill/openweathermap/${weatherStore.todayWeatherData.weather[0].icon}.svg`" alt="">
            </div>
            <p class="text-gray-700 mb-2">{{ weatherStore.todayWeatherData.weather[0].description }}</p>
            <div class="text-3xl font-bold text-gray-900 mb-6">{{ Math.round(weatherStore.todayWeatherData.main.temp) }}º</div>
            <p class="text-gray-500 text-sm">{{ weatherStore.todayWeatherData.name }}, Chile</p>
        </div> -->

    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';
import { useWeatherStore } from '../store/weather';

const weatherStore = useWeatherStore();
weatherStore.fetchtodayWeatherData();


const currentTime = ref('');
const currentDate = ref('');
const greeting = ref('');

const updateDateTime = () => {
    const now = moment();
    currentTime.value = now.format('h:mm:ss a');
    currentDate.value = now.format('MMMM Do YYYY');
    setGreeting(now);
};

const setGreeting = (time) => {
    const hour = time.hour();
    if (hour >= 5 && hour < 12) {
        greeting.value = 'Good morning';
    } else if (hour >= 12 && hour < 17) {
        greeting.value = 'Good afternoon';
    } else {
        greeting.value = 'Good evening';
    }
};

onMounted(() => {
    updateDateTime(); // Call once on mount to display initial values immediately
    setInterval(updateDateTime, 1000);
});
</script>
  