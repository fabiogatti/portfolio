<template>
  <div class="routeContent h-full w-full flex flex-col justify-center skills relative">
    <transition name="fadeContentNormal">
    
    <div class="skills-content flex flex-col absolute" v-show="windowSize==2">
      <p class="contentTitle" :colortitle="titleColor" @click="$emit('changeTitle')">{{ $t('skills.title1') }}</p>
      <div class="flex flex-row items-center">
        <hoverTwoTexts class="skill-hover" :trans="2">
          <font-awesome-icon slot="main" class="skill-icon" icon="code"/>
          <p slot="second" class="skill-subtitle">{{ $t('skills.code') }}</p>
        </hoverTwoTexts>
        <div v-for="skill in skillDataCode" :key="skill.text">
          <progressCircle @hover="handleHover" :color="1" :percentage="skill.percentage" :text="skill.text" :fSize="1" :delay="delay" :active="hoverActive"/>
        </div>
      </div>
      <div class="flex flex-row mt6 items-center">
        <hoverTwoTexts class="skill-hover" :trans="2">
          <font-awesome-icon slot="main" class="skill-icon" icon="paint-brush"/>
          <p slot="second" class="skill-subtitle">{{ $t('skills.design') }}</p>
        </hoverTwoTexts>
         <div v-for="skill in skillDataDesign" :key="skill.text">
          <progressCircle @hover="handleHover" :color="0" :percentage="skill.percentage" :text="skill.text" :fSize="0" :delay="delay" :active="hoverActive"/>
        </div>
      </div>
      <div class="flex flex-row mt6 items-center">
        <hoverTwoTexts class="skill-hover" :trans="2">
          <font-awesome-icon slot="main" class="skill-icon" icon="language"/>
          <p slot="second" class="skill-subtitle">{{ $t('skills.language') }}</p>
        </hoverTwoTexts>
        <div v-for="skill in skillDataLang" :key="skill.text">
          <progressCircle @hover="handleHover" :color="2" :percentage="skill.percentage" :text="skill.text" :fSize="2" :delay="delay" :active="hoverActive"/>
        </div>
      </div>
    </div>
    </transition>
    <transition name="fadeContentNormal">
      <div class="skills-mobile flex flex-col" v-show="windowSize<2">
        <p class="contentTitle" :colortitle="titleColor" @click="$emit('changeTitle')">{{ $t('skills.title1') }}</p>
        <div class="flex justify-center items-center mt1">
          <p class="skill-subtitle mobile-sub mt">{{ $t('skills.code') }}</p>
          <div class="w-full ml8">
            <div class="mt1" v-for="skill in skillDataCode" :key="skill.text+'mobile'">
              <progressBar  :color="0" :percentage="skill.percentage" :delay="delay" :fSize="1" :text="skill.text" />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt4">
          <p class="skill-subtitle mobile-sub">{{ $t('skills.design') }}</p>
          <div class="w-full ml8">
            <div class="mt1" v-for="skill in skillDataDesign" :key="skill.text+'mobile'">
              <progressBar :color="1" :percentage="skill.percentage" :delay="delay" :fSize="0" :text="skill.text" />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt4">
          <p class="skill-subtitle mobile-sub">{{ $t('skills.language2') }}</p>
          <div class="w-full ml8">
            <div class="mt1" v-for="skill in skillDataLang" :key="skill.text+'mobile'">
              <progressBar :color="2" :percentage="skill.percentage" :delay="delay" :fSize="2" :text="skill.text" />
            </div>
          </div>
        </div>
      </div>
    </transition>
    

    
      
  </div>
</template>

<script>
import progressCircle from "../components/progressCircle.vue";
import hoverTwoTexts from "../components/hoverTwoTexts.vue";
import progressBar from "../components/progressBar.vue";

export default {
  name:'Skills',
  props:["full","windowSize","titleColor"],
  data(){
    return{
      delay:2000,
      color:1,
      hoverActive: false,
      skillDataCode:[
        { text:'JS/TS', percentage:60 },
        { text:'HTML', percentage:65 },
        { text:'CSS', percentage:70 },
        { text:'Vue', percentage:65 },
        { text:'Git', percentage:45 },
        { text:'Rest', percentage:65 },
      ],
      skillDataDesign:[
        { text:'AdobeXD', percentage:30 },
        { text:'AdobeAi', percentage:35 },
        { text:'AdobePS', percentage:30 },
        { text:'Figma', percentage:45 }
      ],
      skillDataLang:[
        { text:'ES', percentage:95 },
        { text:'EN', percentage:75 },
        { text:'IT', percentage:35 },
      ]
    }
  },
  components:{
    progressCircle,
    hoverTwoTexts,
    progressBar
  },
  methods:{
    handleHover(hover){
      this.hoverActive = hover;
    }
  },
  created(){
    if(!this.full){
      this.delay = 1000;
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
  width: 6vw;
}
.skill-icon{
  font-size: 4vh;
}
.skill-subtitle{
  font-size: 2vh;
  font-family: "Neon";
}
.mobile-sub{
  color: var(--grey1);
  /*margin-left: 1.5vw;*/
  width: 100%;
  text-align: center;
  position: absolute;
  left:7.5vw;
  writing-mode: vertical-lr;
  text-orientation: upright;
  justify-self: center;
  align-self: center;
  transition: all 0.3s ease;
}

@media (max-aspect-ratio: 1/1) {
  .mobile-sub{
    left:1.5vw;
  }
}
</style>