<template>
    <a :href="`https://fabiogatti.github.io/${title.toLowerCase()}/`" target=”_blank” class="lg:w-[40vh] w-[50vh] project-card flex items-center justify-around ">
        <div class="container p-4 flex flex-col items-center justify-around">
            <img class="preview !max-h-[35vh]" :src='getImageUrl(title)' :alt="`${title} project image`">
            <div class="w-full flex flex-row justify-between items-center mt-2 mb-1">
                <p class="title md:px-2 py-2 font-sansation text-[3vh] md:text-[4.5vh]">{{ title }}</p>
                <slot></slot>
            </div>
            
            <p class="font-neon md:px-2 pb-2 text-justify max-h-48 overflow-auto text-[1.8vh]">{{ $t(`portfolio.${title.toLowerCase()}`) }}</p>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type:String,
        default: ''
    },
    desc: {
        type:String,
        default: ''
    },
})

const getImageUrl = (title) => {
  return new URL(`../assets/img/${title}.png`, import.meta.url).href
}
</script>

<style scoped>
.container{
    background: var(--bgcolor2);
    border-radius: 25px;
    height: 100%;
    width: 100%;
}
.title{
    color: var(--subtitleColor);
}
p{
    color: var(--colorWhite);
    shape-outside: circle(50%)
}
.project-card{
    min-height: 150px;
    transition: all 500ms ease;
    position: relative;
}
.preview{
    height: max-content;
    width: max-content;
    object-fit: contain;
    border-radius: 20px;
    border: 3px solid black;
}
.project-card::before,.project-card::after{
    content: '';
    border-radius: 25px;
    transition: all 1s ease;
    z-index: -1;
    height: calc(100% + 10px);
    width: calc(100% + 10px);
    position: absolute;
    animation: rotateBg 3s infinite;
    animation-play-state: paused;
}
.project-card::after{
    filter: blur(25px);
}

.project-card[color="1"]::before,.project-card[color="1"]::after{
    background: linear-gradient(to bottom right, var(--neonPink1) 10%, var(--neonPink3) 50%, var(--neonPink1) 90%);
    background-size: 200% 200%;
}
.project-card[color="2"]::before,.project-card[color="2"]::after{
    background: linear-gradient(to bottom right, var(--aquaMarine1) 10%, var(--aquaMarine3) 50%, var(--aquaMarine1) 90%);
    background-size: 200% 200%;
}
.project-card[color="3"]::before,.project-card[color="3"]::after{
    background: linear-gradient(to bottom right, var(--amber1) 10%, var(--amber3) 50%, var(--amber1) 90%);
    background-size: 200% 200%;
}

.project-card:hover{
    scale:1.1;
}

.project-card:hover::before, .project-card:hover::after{
    animation-play-state: running;
}

@keyframes rotateBg {
    0%{background-position:0% 0%}
    50%{background-position:100% 100%}
    100%{background-position:0% 0%}
}
</style>