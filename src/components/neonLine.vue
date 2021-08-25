<template>
  <div class="neon-line" :style="[ hover || active ? { width:'100%' } : {} , disable ? {display:'none'} : {display:'block'}]"></div>
</template>

<script>
export default {
  name:'neonLine',
  props:['active','hover','disable']
}
</script>

<style>
.neon-line{
  position: absolute;
  /*background: linear-gradient(to right, var(--color1), var(--color2));*/
  height: 0.5vh;
  width: 0%;
  bottom: -5px;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  background-repeat: no-repeat;
  background-position-x: 50%;
  animation: bgHoverLine 2s infinite alternate;
  display:block;
}
@keyframes bgHoverLine {
    0%{ background-color: var(--color1); }
    100%{ background-color: var(--color2); }
}
</style>