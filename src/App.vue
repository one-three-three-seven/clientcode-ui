<template>
    <h1 class="mx-auto mt-5 text-center">Graffiti Client Codes</h1>
    <h4 class="mx-auto mt-1 mb-2 text-center">(Maintained by Sonic, experimental)</h4>
    <!-- <h4 class="mx-auto mt-1 mb-2 text-center">(Experimental)</h4>
    <h5 class="mx-auto mt-1 mb-2 text-center">/(BU|EJ|EG|GE|NM|RH|GR|LH|LS|NB|TK|PM)[0-9a-f]{0,8}(BU|EJ|EG|GE|NM|RH|GR|LH|LS|NB|TK|PM)/g</h5>
     <a href="https://github.com/one-three-three-seven/ClientCode" class="mx-auto" target="_blank">
        <img src="@/assets/github.svg" width="30" height="30" alt="GitHub">
    </a> -->
    <div class="flex flex-wrap justify-center w-full h-full mt-5">
        <Suspense>
            <Chart />
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import Chart from '@/components/Chart.vue'
</script>

<style>
a {
    @apply link
}

h1 {
    @apply text-3xl font-bold
}

h2 {
    @apply text-2xl font-bold
}

h3 {
    @apply text-xl font-bold
}

h4 {
    @apply text-xl
}

span, a {
    @apply text-lg
}

ul {
    @apply list-none
}

.v-popper__popper .v-popper__inner {
    @apply bg-black
}

.v-popper__popper .v-popper__arrow-outer {
    @apply border-black
}

.v-popper__popper.v-popper__popper--show-from .v-popper__wrapper {
    transform: scale(.5);
}

.v-popper__popper.v-popper__popper--show-to .v-popper__wrapper {
    transform: none;
    transition: transform .2s;
}
</style>
