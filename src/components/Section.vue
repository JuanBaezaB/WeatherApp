<template>
    <div class="bg-white rounded-3xl lg:p-5 p-3 h-full relative ">
        <div class="flex flex-col h-full">
            <div v-if="props.title " class="">
                <p class="uppercase font-semibold">{{ props.title }}</p>
            </div>
            <div class="h-full">
                <slot />
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    title: String
});

</script>