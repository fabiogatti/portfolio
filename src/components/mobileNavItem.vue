<template>
    <router-link class="flex flex-col items-center mobile-item" :to='item.to' @click.native="$emit('clicked')" :class="[ active == item.id ? 'mobile-active' : '']">
    <font-awesome-icon class="icon-nav" :icon="item.icon"/>
    <p class="nav-text">{{ item.mobileText }}</p>
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
    color: var(--colorWhite);
  }
  .nav-text{
    font-size: 1.5vh;
    margin-top: 0.5vh;
    
  }
  .icon-nav{
    font-size: 3vh;
  }
</style>
