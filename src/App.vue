<template>
  <div id="app">
    <sidebar :full="full" :activeElem="activeElem" :windowSize='windowSize' @removefull="full=false" @routerpos="handleRouterPos"/>
    <!--<div class="absolute z-5 blob1">
      <transition name="fadeContentSlow">
        <svg width="600" height="450" v-show="!full">
          <path class="shapeShift" fill="#0e0e0e" d="M56.6,-37.7C71.3,-26.6,80,-3.2,76.1,18.9C72.3,41,56.1,61.9,37.1,67.2C18.2,72.5,-3.4,62.3,-21.8,51.2C-40.2,40.1,-55.4,28.1,-62.1,10.7C-68.8,-6.7,-67.2,-29.5,-55.4,-39.9C-43.7,-50.3,-21.8,-48.3,-0.5,-47.9C20.9,-47.6,41.8,-48.8,56.6,-37.7Z" transform="translate(100 100)" />
        </svg>
      </transition>
    </div>-->
    <transition :name="firstSelected && windowSize == 2 ? 'fadeContentSlow' : 'fadeContentNormal'">
      <router-view v-if="!full" class="router" :full="firstSelected" :style="[{position:routerPos}]" :windowSize='windowSize' :titleColor='titleColor' @changeTitle="titleColor == 3 ? titleColor = 1 : titleColor++"/>
    </transition>
    <language-controller :full="full" :windowSize='windowSize'/>
  </div>
</template>

<script>
//import anime from 'animejs';
import Sidebar from './components/sidebar.vue'
import LanguageController from './components/languageController.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    LanguageController
  },
  data(){
    return{
      full:true,
      activeElem: 0,
      firstSelected:false,
      windowSize: 2,
      routerPos: 'relative',
      titleColor:1
    }
  },
  methods:{
    changeWindowSize(){
      var w = window.innerWidth;
      var h = window.innerHeight;
      if(h >= w){
        return 0;
      }
      else if(5*w < 8*h){
        return 1;
      }
      else{
        return 2;
      }
    },
    handleRouterPos(pos){
      this.routerPos = pos;
    }
  },
  created(){
    /*var router = window.location.pathname.split('/')[window.location.pathname.split('/').length-1];*/
    if(this.$router.currentRoute.path != '/')
      this.$router.push({ path: '/' })
    //this.full = router.length > 0 ? false : true;
  },
  mounted(){
    this.windowSize = this.changeWindowSize();
    console.log(this.windowSize);
    window.addEventListener('resize',()=>{
      this.windowSize = this.changeWindowSize();
      console.log(this.windowSize);
      
    });
    setTimeout(() => {
      /*anime({
          targets: '.shapeShift',
          d: [
            { value: "M47.3,-39.5C52.3,-31.4,41.1,-12.3,33.5,2.3C25.9,16.9,21.8,26.9,13.1,33.4C4.4,40,-8.9,43.1,-24.6,39.8C-40.4,36.6,-58.6,27.1,-63.7,12.3C-68.8,-2.4,-60.9,-22.4,-48.1,-32.2C-35.3,-42,-17.7,-41.6,1.7,-43C21.1,-44.4,42.3,-47.5,47.3,-39.5Z"},
            { value: 'M46.8,-29.5C56.9,-24.8,58.5,-5.5,52.9,9.3C47.3,24.2,34.5,34.7,19.6,42.5C4.7,50.3,-12.2,55.5,-21.8,49.3C-31.3,43.2,-33.4,25.6,-36.7,9C-40,-7.7,-44.6,-23.4,-38.7,-27.2C-32.8,-31,-16.4,-22.7,1,-23.5C18.4,-24.3,36.8,-34.2,46.8,-29.5Z' },
            { value: 'M56.6,-37.7C71.3,-26.6,80,-3.2,76.1,18.9C72.3,41,56.1,61.9,37.1,67.2C18.2,72.5,-3.4,62.3,-21.8,51.2C-40.2,40.1,-55.4,28.1,-62.1,10.7C-68.8,-6.7,-67.2,-29.5,-55.4,-39.9C-43.7,-50.3,-21.8,-48.3,-0.5,-47.9C20.9,-47.6,41.8,-48.8,56.6,-37.7Z' },
          ],
          easing: 'linear',
          duration: 15000,
          loop: true,
          direction: 'alternate',
        });*/
    }, 200);
  },
  watch:{
    full(){
      this.firstSelected = true;
      setTimeout(() => {
        this.firstSelected = false;
        if(this.windowSize != 2)
          this.routerPos = 'absolute';
      }, 1500);
    }
} 
}
</script>

<style lang="scss">
@font-face {
  font-family: "Neon";
  src: local("Neon"),  url(./fonts/Neon.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto-regular";
  src: local("Roboto-regular"),  url(./fonts/Roboto-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto-condensed";
  src: local("Roboto-condensed"),  url(./fonts/Roboto-Condensed.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto-bold";
  src: local("Roboto-Bold"),  url(./fonts/Roboto-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Scada";
  src: local("Scada"),  url(./fonts/Scada-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Neon-glow";
  src: local("Neon-glow"),  url(./fonts/NEONGLOW.otf) format("opentype");
}
@font-face {
  font-family: "Neon-glow-light";
  src: local("NEONGLOW-Light"),  url(./fonts/NEONGLOW-Light.otf) format("opentype");
}
@font-face {
  font-family: "Sansation_Regular";
  src: local("Sansation_Regular"),  url(./fonts/Sansation_Regular.ttf) format("truetype");
}


.font-neon{
  font-family: "Neon";
}

.font-sansation{
  font-family: "Sansation_Regular";
}

*{
  margin: 0;
}
body{
  background-color: #000000;
}
#app {
  /*position: relative;*/
  user-select: none;
  height: 100%;
  width: 100vw;
  --colorWhite: white;
  --neonPink1: #EE6EFF;/*#FF6EC7*/
  --neonPink2:#E858BF;
  --neonPink3: #FF6183;
  --neonPink1Light: #f399ff;
  --aquaMarine1: #18AECA;
  --aquaMarine2: #10E0C7;
  --aquaMarine3: #0FD686;
  --amber1: #FFC00D;
  --amber2:  #E8980C;
  --amber3: #FF8300;
  --bgcolor1: black;
  --bgcolor2: #1B1B1B;
  --subtitleColor: #B7E7F7;
  --subtitleColor2: #e0bcff;
  --textColor: #e5dbee;
  --color1: #18aeca;
  --color2: #2af598;
  --grey1: #acacac;
  --neonPurple1:#B026FF;
  
  background-color: var(--bgcolor1);
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
#app::before{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(27, 27, 27, 0.5);
}
.router{
  min-width:80vw;
  z-index: 10;
  transition: all 0.3s linear;
}
.fadeRight-enter-active, .fadeRight-leave-active {
  transition: all 0.75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fadeRight-enter, .fadeRight-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.blob1{
  right:-450px;
  top: 50px;
  scale: 1.5;
}


.fadeContentSlow-enter-active  {
  transition: all 0.75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 1.5s;
}
.fadeContentSlow-leave-active{
  transition: all 0.75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fadeContentSlow-enter {
  transform: translateY(-30px);
  opacity: 0;
}
.fadeContentSlow-leave-to {
  transform: translateY(50px);
  opacity: 0;
}


.fadeContentNormal-enter-active  {
  transition: all 0.55s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 0.65s;
}
.fadeContentNormal-leave-active{
  transition: all 0.55s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fadeContentNormal-enter {
  transform: translateY(-30px);
  opacity: 0;
}
.fadeContentNormal-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.contentTitle{
  font-family: "Neon-glow";
  font-size: 5vh;
  color: var(--neonPink1);
  /*text-shadow:0 0 10px var(--neonPink1Light),
              0 0 30px var(--neonPink1Light),
              0 0 50px var(--neonPink1Light);
  animation: neon-title 3s linear infinite alternate;*/
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease;
}

.contentTitle[colortitle="1"]{
  animation: neon-title 3s linear infinite alternate;
}
.contentTitle[colortitle="2"]{
  animation: neon-title2 3s linear infinite alternate;
}
.contentTitle[colortitle="3"]{
  animation: neon-title3 3s linear infinite alternate;
}

.contentText{
  font-family: "Sansation_Regular";
  font-size: 2.1vh;
  color: var(--textColor);
  transition: all 0.3s ease;
}

.contentSubtitle{
  font-family: "Neon";
  font-size: 2.75vh;
  color: var(--neonPink1Light);
  transition: all 0.3s ease;
}


.routeContent{
  width: 80vw;
  padding: 2.5vh 10vw 2.5vh 5vw;
}

.mt1{
  margin-top: 1vh;
}
.mt2{
  margin-top: 2vh;
}
.mt4{
  margin-top: 4vh;
}
.mt5{
  margin-top: 5vh;
}
.mt6{
  margin-top: 6vh;
}

.ml1{
  margin-left: 1vw;
}
.ml2{
  margin-left: 2vw;
}
.ml4{
  margin-left: 4vw;
}
.ml5{
  margin-left: 5vw;
}
.ml6{
  margin-left: 6vw;
}
.ml8{
  margin-left: 8vw;
}

html,.router,.routeContent{
    overflow-x: hidden;
    overflow-y: hidden;
}

html{
  position: fixed;
}

a,button,div{
  -webkit-tap-highlight-color: transparent;
}

@keyframes neon-title {
  from {
    color: var(--neonPink1);
    text-shadow:0 0 5px var(--neonPink1),
                0 0 20px var(--neonPink1);
  }
  to {
    color: var(--neonPink2);
    text-shadow:
      0 0 5px var(--neonPink2),
      0 0 15px var(--neonPink2),
      0 0 35px var(--neonPink2);
  }
}

@keyframes neon-title2 {
  from {
    color: var(--aquaMarine1);
    text-shadow:0 0 5px var(--aquaMarine1),
                0 0 20px var(--aquaMarine1);
  }
  to {
    color: var(--aquaMarine2);
    text-shadow:
      0 0 5px var(--aquaMarine2),
      0 0 15px var(--aquaMarine2),
      0 0 35px var(--aquaMarine2);
  }
}

@keyframes neon-title3 {
  from {
    color: var(--amber1);
    text-shadow:0 0 5px var(--amber1),
                0 0 20px var(--amber1);
  }
  to {
    color: var(--amber2);
    text-shadow:
      0 0 5px var(--amber2),
      0 0 15px var(--amber2),
      0 0 35px var(--amber2);
  }
}

@media only screen {
  html,body,#app,.navbar,.main-side,#app .sidebar{
    height: 100%;
    height: -webkit-fill-available;
  }
}

@media (max-aspect-ratio: 8/5){
  .router{
    padding-bottom: 10vh;
  }
}

@media (max-aspect-ratio: 1/1){
  .routeContent{
    padding: 2vh 3vw 2vh 3vw;
  }
  .router{
    padding-bottom: 10vh;
  }
}

@media (max-aspect-ratio: 5/8){
  .contentTitle{
    font-size: 4vh;
  }
  .contentSubtitle{
    font-size: 2.2vh;
  }
  .contentText{
    font-size: 1.75vh;
  }
}

</style>
