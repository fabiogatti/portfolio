<template>
  <router-link class="flex flex-col items-center mobile-item" :to='item.to' @click.native="$emit('clicked')" :class="[ active == item.id ? 'mobile-active' : '']">
    <font-awesome-icon class="icon-nav" :icon="item.icon"/>
    <p class="text-nav">{{ $t(item.text) }}</p>
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
  }
  .mobile-active{
    .icon-nav{
      color: var(--color2);
      filter: none;
      filter: drop-shadow(0px 0px 5px var(--color2));
    }
    .text-nav{
      opacity: 1;
      text-shadow: 0px 0px 1px var(--color2);
      color: var(--color2);
      filter: drop-shadow(0px 0px 5px var(--color2));
    }
  }
  .text-nav{
    transition: all 0.5s ease;
    font-size: 1.5vh;
    margin-top: 0.5vh;
    color: var(--color2);
    opacity: 0.35;
    font-family: 'Roboto-regular';
  }
  .icon-nav{
    transition: all 0.5s ease;
    filter: drop-shadow(0px 0px 2px var(--color2));
    font-size: 3vh;
  }

  .mobile-item:hover .text-nav, .mobile-item:hover .icon-nav{
    color:var(--color2);
    opacity: 0.7;
  }
</style>
