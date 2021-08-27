<template>
  <div class="sidebar-title" @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: item.id == active }">
    <transition name="fade">
      <font-awesome-icon class="icon" icon="chevron-right" id='arrow-icon' v-show="active==item.id && !full"/>
    </transition>
    <router-link  class="route" id='about-link' :to='item.to' @click.native="$emit('clicked')">{{ item.text }}</router-link>
    <neonLine :hover="hover ? true : false" :active="active==item.id && full ? true : false" :disable="!full"></neonLine>
    <!--<div :style="[ full ? {'display':'block'} : {'display':'none'}, active==item.id && full ? { width:'100%' } : {} ]"></div>-->
  </div>
</template>

<script>
import neonLine from './neonLine.vue';

export default{
  name:"sidebar-title",
  props:["item","active",'full'],
  components:{neonLine},
  data(){
    return{
      hover:false
    }
  }
}
</script>

<style scoped>
.sidebar-title{
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 3.5vh;
  color: rgba(255,255,255,0.8);
  justify-content: center;
  align-items: center;
  font-family: "Sansation_Regular";
  margin-top: 0.2em;
  user-select: none;
}
.active{
  color: var(--colorWhite);
}
.icon{
  position: absolute;
  left: -4vh;
  color: var(--color1);
  animation: colorAnim 5s infinite;
  animation-delay: 0.3s; 
}
.route{
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  /*text-align: left;
  width: 100%;*/
}
.route:hover{
  text-shadow: 0px 0px 1.25rem var(--subtitleColor);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: .20s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-15px);
  opacity: 0;
}
.hover-line{
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
}
.sidebar-title:hover .neon-line{
  width: 100%;
}
@keyframes bgHoverLine {
    0%{ background-color: var(--color1); }
    100%{ background-color: var(--color2); }
}
</style>