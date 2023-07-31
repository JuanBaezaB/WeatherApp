<template>
    <div class="p-2 h-full">
        <div >
            <p>{{ greeting }}</p>
        </div>

        <div class="m-2 text-center">
            <p class="font-semibold uppercase text-4xl md:text-2xl">{{ currentTime }}</p>
            <p class="text-xs">{{ currentDate }}</p>
        </div> 
        
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';

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
  