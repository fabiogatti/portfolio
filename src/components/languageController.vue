<template>
  <div class="lang">
    <div class="lang-list">
      <button class="lang-opt" @click="setLanguage('en')" :class="[ activeLang == 'en' ? 'activeColor' : '']">EN</button>
      <button class="lang-opt" @click="setLanguage('it')" :class="[ activeLang == 'it' ? 'activeColor' : '']">IT</button>
      <button class="lang-opt" @click="setLanguage('es')" :class="[ activeLang == 'es' ? 'activeColor' : '']">ES</button>
    </div>
    <button class="main-lang-btn" @click="toggleButtons()">
      <div class="hue"></div>
      <div class="circle" :class="[ full ? 'bgColor2' : 'bgColor1' ]"></div>
      <font-awesome-icon class="icon" icon="globe" id='globe' :class="[ active ? 'activeColor' : '' ]"/>
    </button>
  </div>
</template>

<script>
export default {
  name:'LanguageController',
  props:['full'],
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
      if(this.active){
        this.$anime
          .timeline()
          .add({
              targets: '.lang-list',
              translateY: 20,
              opacity: 0,
              duration: 300,
              easing: 'easeOutExpo',
          });
        this.$anime
        .timeline()
          .add({
              targets: '.icon',
              rotate: 0,
              duration: 800,
              easing: 'easeOutExpo',
          })
      }
      else{
        this.$anime
          .timeline()
          .add({
              targets: '.icon',
              rotate: 180,
              duration: 800,
              easing: 'easeOutExpo',
          });
        this.$anime
        .timeline()
          .add({
              targets: '.lang-list',
              translateY: 0,
              opacity: 1,
              duration: 300,
              easing: 'easeInExpo',
          })
      }
      this.active = !this.active;
    }
  },
  mounted(){
    setTimeout(() => {
      this.$anime
        .timeline()
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
            translateY: 20,
            opacity: 0,
            duration: 100,
            easing: 'easeOutExpo',
        });
    }, 100);
    var userLang = navigator.language || navigator.userLanguage;
    var lang = userLang.split('-')[0]
    if(userLang && (lang == 'it' || lang == 'us' || lang == 'es' )){
      this.$i18n.locale = lang;
      this.activeLang =  lang;
    }
  }
}
</script>

<style scoped>
button:focus { 
  outline: none;
}
.lang{
  color: var(--colorMain1);
  position: absolute;
  bottom: 4%;
  right: 2vw;
  z-index: 50;
  transition: all 0.3s ease-in-out;
}
.lang-list{
  opacity: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}
.lang-opt{
  padding: 0.2em 0 0.2em 0;
  transition: all .1s ease-in;
  font-size: 1.1em;
}
.lang-opt:hover{
  text-shadow: 0 0 10px var(--neonPink), 0 0 20px var(--neonPink);
  font-size: 1.4em;
}
.main-lang-btn{
  position: relative;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .15s ease-in-out;
}
.circle{
  width: 2rem;
  height: 2rem;
  z-index: 55;
  position: absolute;
  border-radius: 50%;
}
.bgColor1{
  background-color: var(--bgcolor1)
}
.bgColor2{
  background-color: var(--bgcolor2)
}
.activeColor{
  color: var(--neonPink);
}
.hue{
  width: 100%;
  height: 100%;
  position: absolute;
  width: 3rem;
  height: 3rem;
  margin: 20px;
  background: linear-gradient(45deg, transparent 60%, var(--neonPink));
  animation: neon-loader 3s linear 1s infinite;
  border-radius: 50%;
  z-index: 51;
}
.icon{
  padding: 4px;
  font-size: 2em;
  z-index: 60;
}
.main-lang-btn:hover{
  background: var(--neonPink);
  border-radius: 50%;
  /*transition: all .3s ease-in-out;*/
  transition: all .2s ease-in-out;
  box-shadow: 0 0 10px var(--neonPink),
              0 0 30px var(--neonPink),
              0 0 50px var(--neonPink);
}
.main-lang-btn:hover .hue{
  animation-play-state: paused;
  background: transparent;
}
.main-lang-btn:hover .circle{
  width: 1.75rem;
  height: 1.75rem;
}
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
</style>