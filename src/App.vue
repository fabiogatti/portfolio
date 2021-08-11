<template>
  <div id="app">
    <sidebar :full=full />
    <router-view class="router"/>
    <language-controller :full=full />
  </div>
</template>

<script>
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
      full:true
    }
  },
  created(){
    var router = window.location.pathname.split('/')[window.location.pathname.split('/').length-1];
    this.full = router.length > 0 ? false : true;
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&family=Roboto:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Scada&display=swap');
*{
  margin: 0;
}
body{
  background-color: #000000;
}
#app {
  position: relative;
  user-select: none;
  height: 100vh;
  width: 100vw;
  --colorMain1: white;
  --neonPink: #EE6EFF;/*#FF6EC7*/
  --bgcolor1: black;
  --bgcolor2: #1B1B1B;
  --subtitleColor: #B7E7F7;
  --color1: #18aeca;
  --color2: #2af598;
  /*background-image: linear-gradient(to bottom right, #3C1E1E 0%, #000000 100%);*/
  /*background-image: linear-gradient( to bottom right ,
    rgba(60, 30, 30, 1) 0%,
    rgba(60, 30, 30, 0.3) 50%,
    rgba(60, 30, 30, 0.15) 65%,
    rgba(60, 30, 30, 0.075) 75.5%,
    rgba(60, 30, 30, 0.037) 82.85%,
    rgba(60, 30, 30, 0.019) 88%,
    rgba(60, 30, 30, 0) 100%);*/
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
  width:80vw
}
</style>
