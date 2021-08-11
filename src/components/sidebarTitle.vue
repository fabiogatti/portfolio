<template>
  <div class="sidebar-title"  :class="{ active: item.id == active }">
    <transition name="fade">
      <font-awesome-icon class="icon" icon="chevron-right" id='arrow-icon' v-show="active==item.id"/>
    </transition>
    <router-link class="route" id='about-link' :to='item.to' @click.native="$emit('clicked')">{{ item.text }}</router-link>
  </div>
</template>

<script>
export default {
  name:"sidebar-title",
  props:["item","active"]
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
  font-family: 'Roboto';
  margin-top: 0.2em;
  user-select: none;
}
.active{
  color: white;
}
.icon{
  position: absolute;
  left: -3vh;
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
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0
}
</style>