<template>
  <div class="h-full w-full flex flex-col justify-center routeContent about">
    <p class="contentTitle" :colortitle="titleColor" @click="$emit('changeTitle')">{{ $t('about.title1') }}</p>
    <div class="mt2">
      <h3 class="contentSubtitle">{{ $t('about.subtitle1') }}</h3>
      <div class="flex flex-row">
        <div>
          <p class="contentText mt2">{{ $t('about.introText1') }}</p>
          <p class="contentText mt2">{{ $t('about.introText2') }}</p>
        </div>
      </div>
      
    </div>
    <div class="mt4">
      <h3 class="contentSubtitle">{{ $t('about.subtitle2') }}</h3>
      <p class="contentText mt2">{{ $t('about.introText3') }}</p>
      <p class="contentText mt2">{{ $t('about.introText4') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'About',
  props:['titleColor','windowSize']
}
</script>

<style scoped>
.aboutDelay{
  transition-delay: 5s;
}
</style>