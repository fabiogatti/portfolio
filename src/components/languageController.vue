<template>
  <div class="lang flex flex-col">
    <div class="lang-list" :style="[ windowSize == 0 ? {order:2} : '']">
      <button class="lang-opt" @click="setLanguage('en')" :class="[ activeLang == 'en' ? 'activeColor' : '']">EN</button>
      <button class="lang-opt" @click="setLanguage('it')" :class="[ activeLang == 'it' ? 'activeColor' : '']">IT</button>
      <button class="lang-opt" @click="setLanguage('es')" :class="[ activeLang == 'es' ? 'activeColor' : '']">ES</button>
    </div>
    <button class="main-lang-btn" @click="toggleButtons()" :style="[ windowSize == 0 ? {order:1} : '']">
      <div class="hue"></div>
      <!--<div class="circle"></div>-->
      <font-awesome-icon class="iconLanguage" icon="globe" id='globe' :class="[ active ? 'activeColor' : '' ]"/>
    </button>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name:'LanguageController',
  props:['full','windowSize'],
  data(){
    return{
      active:false,
      activeLang:'en'
    }
  },
  methods:{
    setLanguage(lang){
      this.activeLang = lang;
      this.$i18n.locale = lang;
    },
    toggleButtons(){
      var translateY1 = 0;
      var translateY2 = '3vh';
      if(this.windowSize == 0){
        translateY1 = '1vh';
        translateY2 = '-3vh';
      }

      if(this.active){
        anime.timeline()
          .add({
              targets: '.lang-list',
              translateY: translateY2,
              opacity: 0,
              duration: 350,
              easing: 'linear',
              complete: function() {
                document.querySelector('.lang-list').style.display = 'none';
              }
          });
        anime.timeline()
          .add({
              targets: '.iconLanguage',
              rotate: 0,
              duration: 1000,
              easing: 'easeOutExpo',
          })
      }
      else{
        anime.timeline()
        .add({
          targets: '.lang-list',
          translateY: translateY1,
          opacity: 1,
          duration: 350,
          delay: 50,
          easing: 'linear',
          begin: function() {
            document.querySelector('.lang-list').style.display = 'flex';
          }
        })
        anime.timeline().add({
          targets: '.iconLanguage',
          rotate: 180,
          duration: 1000,
          easing: 'easeOutExpo',
        });
        
      }
      this.active = !this.active;
    }
  },
  mounted(){
    setTimeout(() => {
      var iniTranslateY = 20
      if(this.windowSize == 0){
        iniTranslateY = -20
      }
      anime.timeline()
        .add({
            targets: '.main-lang-btn',
            translateY: -25,
            duration: 100,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.main-lang-btn',
            translateY: 0,
            opacity: 1,
            duration: 600,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.lang-list',
            translateY: iniTranslateY,
            opacity: 0,
            duration: 100,
            easing: 'easeOutExpo'
        });
      
    }, 100);
    var userLang = navigator.language || navigator.userLanguage;
    var lang = userLang.split('-')[0]
    if(userLang && (lang == 'it' || lang == 'us' || lang == 'es' )){
      this.$i18n.locale = lang;
      this.activeLang =  lang;
    }
  },
  watch:{
    windowSize(newVal){
      if(!this.active){
         if(newVal >= 1){
          anime({
            targets: '.lang-list',
            translateY: '3vh',
            duration: 10
          })
        }
        else if(newVal == 0){
          anime({
            targets: '.lang-list',
            translateY: '-3vh',
            duration: 10
          })
        }
      }
     
    }
  }
}
</script>

<style scoped lang='scss'>
button:focus { 
  outline: none;
}
.lang{
  --langColor: var(--aquaMarine1);
  --langColor2:var(--colorWhite);
  position: absolute;
  bottom: 2.5vh;
  right: 2.5vh;
  z-index: 50;
  transition: all 0.3s ease-in-out;
}
.lang-list{
  opacity: hidden;
  display: flex;
  flex-direction: column;
  display: none;
}
.lang-opt{
  padding: 0.2em 0 0.2em 0;
  transition: all .2s ease-in;
  font-size: 2vh;
  color: var(--langColor2);
}
.lang-opt:hover{
  text-shadow: 0 0 10px var(--langColor), 0 0 20px var(--langColor);
  /*font-size: 2.5vh;*/
  transform: scale(1.3);
}
.main-lang-btn{
  position: relative;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .35s ease-in-out;
  color: var(--langColor2);
  border-radius: 50%;
  font-size: 2.25vh;
  margin-top: 1.75vh;
}
/*.circle{
  width: 2rem;
  height: 2rem;
  z-index: 55;
  position: absolute;
  border-radius: 50%;
}*/
.activeColor{
  color: var(--langColor);
}
.hue{
  width: 100%;
  height: 100%;
  position: absolute;
  width: 3rem;
  height: 3rem;
  margin: 20px;
  /*background: linear-gradient(45deg, transparent 60%, var(--langColor));
  animation: neon-loader 3s linear 1s infinite;*/
  border-radius: 50%;
  z-index: 51;
}
.iconLanguage{
  padding: 4px;
  font-size: 2em;
  z-index: 60;
}
.main-lang-btn:hover{
  border-radius: 50%;
  /*transition: all .3s ease-in-out;*/
  transition: all .35s ease-in-out;
  box-shadow: 0 0 10px var(--langColor),
              0 0 30px var(--langColor);
}

.main-lang-btn:hover .hue{
  animation-play-state: paused;
  background: transparent;
}
/*.main-lang-btn:hover .circle{
  width: 1.75rem;
  height: 1.75rem;
}*/
@keyframes neon-loader {
  from {
    transform: rotate(0deg);
    /*filter: hue-rotate(-120deg);*/
  }
  to {
    transform: rotate(360deg);
    /*filter: hue-rotate(240deg);*/
  }
}

/* IMPORTANT TODO: RULE FOR BUTTON FONT SIZE TO BE DIFFERENT WHEN SCREEN HEIGHT IS LESS*/

@media (max-height:650px) {
  .main-lang-btn{
    font-size: 3vh;
  }
  .lang-opt{
    font-size: 2.4vh;
  }
}

@media (max-height:450px) {
  .lang-opt{
    font-size: 2.75vh;
  }
  .main-lang-btn{
    font-size: 3.5vh;
  }
}

@media (max-aspect-ratio: 1/1) {
    .lang{
      top:2.5vh;
      bottom: unset;
    }
    .lang-list{
      margin-top: 1.75vh;
    }
}



</style>

