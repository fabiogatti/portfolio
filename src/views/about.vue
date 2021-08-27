<template>
  <div class="h-full w-screen flex flex-col justify-center routeContent about">
    <h1 class="contentTitle" :colortitle="color" @click="color == 3 ? color = 1 : color++">About me</h1>
    <div class="mt4">
      <h3 class="contentSubtitle">I'm a frontend developer, currently living in Cali - Colombia.</h3>
      <div class="flex flex-row">
        <div>
          <p class="contentText mt2">Ever since I discovered frontend and UI development I've been in love with it! Animating each button, creating each component, choosing every color
          and giving all i have so the user can get the best experience, those are the things I enjoy the most about my work.
          </p>
          <p class="contentText mt2">
            I believe that the most valuable tool for an developer is its ability to adapt to solve a specific problem. I love to help others as best as i can and consider myself
            a very good teamplayer. I also value my life-work balance a lot!
          </p>
        </div>
        <!--<div class="about-icons1 pl-10">
          <font-awesome-icon class="icon1" icon="palette"/>
          <font-awesome-icon class="icon2" icon="paint-brush"/>
        </div>-->
      </div>
      
    </div>
    <div class="mt6">
      <h3 class="contentSubtitle">Something more personal</h3>
      <p class="contentText mt2">
        I love playing videogames (always been addicted to Dota 2). Avid enjoyer of terror movies and cooking desserts.
      </p>
      <p class="contentText mt2">
        As for sports i usually waste some time at the gym and like to go rollerblading from time to time. Also looking forward to travel a lot in the near future!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'About',
  data(){
    return{
      color:1
    }
  }
}
</script>

<style scoped>
.aboutDelay{
  transition-delay: 5s;
}
.about-icons1{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--color1);
  width: 50vh;
  padding-left: 50px;
  font-size: 7vh;
  align-items: flex-end;
}
.icon1,.icon2{
  padding: 1vh;
  border-radius: 10px;
  border: solid 3px var(--color2);
  animation: colorAnim2 5s infinite;
  box-shadow: 0 0 10px var(--color2), 0 0 20px var(--color2);
}
.icon2{
  grid-column: 2;
  grid-row: 1;
}
.icon1{
  grid-column: 1;
  grid-row: 2;
}
</style>