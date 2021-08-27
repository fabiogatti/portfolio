<template>
  <div class="hoverTwoTexts flex flex-col justify-center items-center" >
    <div class="main w-full" :trans="trans">
      <slot name="main"></slot>
    </div>
    <div class="second w-full">
      <slot name="second"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"hoverTwoTexts",
  props:["trans"]
}
</script>

<style scoped>
.hoverTwoTexts{
  text-align: center;
  color: var(--grey1);
}
.main{
  transition: all 0.75s ease;
}
.main[trans='1']{
  transform: translate(0,1vh);
}
.main[trans='2']{
  transform: translate(0,2vh);
}

.second{
  margin-top: 0.5vh;
  opacity: 0;
  transition: all 0.5s ease;
}

.hoverTwoTexts:hover .main[trans='1']{
  transform: translate(0,-0.1vh);
  color: var(--colorMain1);
  filter: drop-shadow( 
    0 0 10px var(--grey1)
  );
}
.hoverTwoTexts:hover .main[trans='2']{
  transform: translate(0,-0.2vh);
  color: var(--colorMain1);
  filter: drop-shadow( 
    0 0 10px var(--grey1)
  );
}
.hoverTwoTexts:hover .second{
  opacity: 1;
  color: var(--colorMain1);
  text-shadow:  
    0 0 10px var(--grey1),
    0 0 30px var(--grey1),
    0 0 50px var(--grey1);
}
</style>