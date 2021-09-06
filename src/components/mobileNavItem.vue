<template>
    <router-link class="flex flex-col items-center mobile-item" :to='item.to' @click.native="$emit('clicked')" :class="[ active == item.id ? 'mobile-active' : '']">
    <font-awesome-icon class="icon-nav" :icon="item.icon"/>
    <p class="text-nav">{{ item.mobileText }}</p>
  </router-link>
</template>

<script>
export default {
  name:'mobileNavItem',
  props:['item','active']
}
</script>

<style lang="scss" scoped>
  .mobile-item{
    transition: all 1s ease;
    
    /*text-shadow: 0 0 0px 5px var(--color2);*/
  }
  .mobile-active{
    /*color: var(--colorWhite);*/
    color: var(--color2);
    filter: drop-shadow(0px 0px 3px var(--color2));
    .icon-nav{
      filter: none;
    }
    .text-nav{
      opacity: 1;
      text-shadow: 0px 0px 1px var(--color2);
    }
  }
  .text-nav{
    transition: all 1s ease;
    font-size: 1.5vh;
    margin-top: 0.5vh;
    color: var(--color2);
    opacity: 0.35;
    font-family: 'Roboto-regular';
  }
  .icon-nav{
    filter: drop-shadow(0px 0px 1.5px var(--color2));
    font-size: 3vh;
  }
</style>
