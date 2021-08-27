<template>
  <div class="routeContent">
    <div class="h-full w-screen flex flex-col justify-center skills">
      <p class="contentTitle" :colortitle="color" @click="color == 3 ? color = 1 : color++">Skills</p>
      <div class="skills-content flex flex-col">
        <div class="flex flex-row items-center">
          <hoverTwoTexts class="skill-hover" :trans="2">
            <font-awesome-icon slot="main" class="skill-icon" icon="code"/>
            <p slot="second" class="skill-subtitle">Code</p>
          </hoverTwoTexts>
          <progressCircle :color="1" :percentage="60" :text="'JS/TS'" :fSize="1" :delay="delay" />
          <progressCircle :color="1" :percentage="55" :text="'HTML'" :fSize="1" :delay="delay" />
          <progressCircle :color="1" :percentage="70" :text="'CSS'" :fSize="1" :delay="delay" />
          <progressCircle :color="1" :percentage="65" :text="'VueJs'" :fSize="1" :delay="delay" />
          <progressCircle :color="1" :percentage="55" :text="'Git'" :fSize="1" :delay="delay" />
          <progressCircle :color="1" :percentage="70" :text="'Rest'" :fSize="1" :delay="delay" />
        </div>
        <div class="flex flex-row mt-16 items-center">
          <hoverTwoTexts class="skill-hover" :trans="2">
            <font-awesome-icon slot="main" class="skill-icon" icon="paint-brush"/>
            <p slot="second" class="skill-subtitle">Design</p>
          </hoverTwoTexts>
          <progressCircle :color="0" :percentage="30" :text="'AdobeXD'" :fSize="0" :delay="delay" />
          <progressCircle :color="0" :percentage="35" :text="'AdobeAi'" :fSize="0" :delay="delay" />
          <progressCircle :color="0" :percentage="30" :text="'AdobePS'" :fSize="0" :delay="delay" />
          <progressCircle :color="0" :percentage="45" :text="'Figma'" :fSize="0" :delay="delay" />
        </div>
        <div class="flex flex-row mt-16 items-center">
          <hoverTwoTexts class="skill-hover" :trans="2">
            <font-awesome-icon slot="main" class="skill-icon" icon="language"/>
            <p slot="second" class="skill-subtitle">Language</p>
          </hoverTwoTexts>
          <progressCircle :color="2" :percentage="90" :text="'Es'" :fSize="2" :delay="delay"/>
          <progressCircle :color="2" :percentage="75" :text="'En'" :fSize="2" :delay="delay"/>
          <progressCircle :color="2" :percentage="40" :text="'It'" :fSize="2" :delay="delay"/>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import progressCircle from "../components/progressCircle.vue";
import hoverTwoTexts from "../components/hoverTwoTexts.vue";

export default {
  name:'Skills',
  props:["full"],
  data(){
    return{
      delay:1500,
      color:1
    }
  },
  components:{
    progressCircle,
    hoverTwoTexts
  },
  created(){
    if(!this.full){
      this.delay = 500;
    }
  }
}
</script>

<style scoped>
.skills-content{
  padding-left: 1vw;
  padding-top: 4vh;
}
.skill-hover{
  margin-right: 2vw;
  width: 4vw;
}
.skill-icon{
  font-size: 4vh;
}
.skill-subtitle{
  font-size: 2vh;
  font-family: "Neon";
}
</style>