<template>
  <div class="routeContent">
    <div class="h-full w-screen flex flex-col justify-center contact">
       <p class="contentTitle" :colortitle="color" @click="color == 3 ? color = 1 : color++">Contact</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Contact',
  data(){
    return{
      color:1
    }
  },
}
</script>

<style lang="scss" scoped>

</style>>