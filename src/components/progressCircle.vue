<template>
  <div class="progress-circle mx-9" :key="counter" :class="active ? 'active' : ''" @mouseenter="$emit('hover',true)" @mouseleave="$emit('hover',false)"> 
    <div :color="color" class="circle-gradient w-full h-full flex justify-center items-center">
      <div class="loader" :style="loaderStyle"></div>
      <div class="glow opacity-0" :style="[glowStyle,textOpac]"></div>
      <svg viewBox="0 0 100 100" class="anim" ref="svgCircle">
        <circle r="45" cx="50" cy="50" class="pie" :style="animStyle"/>

      </svg>
      <div class="flex flex-col justify-center items-center">
        <p :fSize="fSize" :style="textOpac" class="skill-name">{{ text }}</p>
        <p class="skill-percent">{{ percentage }}%</p>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name:"porgressCircle",
  props:["color","percentage","text","delay","fSize",'active'],
  data(){
    return{
      animStyle:'',
      counter:0,
      r:50,
      c:{x:50,y:50},
      textOpac:''
    }
  },
  computed:{
    loaderStyle(){
      if(this.color === 0){
        return `background-image:conic-gradient(
          from 0deg, 
          var(--neonPink1) 0%, 
          transparent 1.5%,
          transparent ${this.percentage-1}%,
          var(--neonPink1) ${this.percentage-0.1}%,
          transparent ${this.percentage}%,
          var(--bgcolor1) 0% 90%);`;
      }
      else if(this.color === 1){
        return `background-image:conic-gradient(
          from 0deg, 
          var(--aquaMarine1) 0%, 
          transparent 1.5%,
          transparent ${this.percentage-1}%,
          var(--aquaMarine1) ${this.percentage-0.1}%,
          transparent ${this.percentage}%,
          var(--bgcolor1) 0% 90%)`;
      }
      else{
        return `background-image:conic-gradient(
          from 0deg, 
          var(--amber1) 0%, 
          transparent 1.5%,
          transparent ${this.percentage-1}%,
          var(--amber1) ${this.percentage-0.1}%,
          transparent ${this.percentage}%,
          var(--bgcolor1) 0% 90%)`;
      }
      //return "background-image:conic-gradient(from 0deg, transparent "+this.percentage+"%,  var(--bgcolor1) 0% 90%)";
    },
    glowStyle(){
      if(this.color === 0){
        return `background-image:conic-gradient(
          from 0deg,
          var(--bgcolor1) 0%,
          var(--neonPink1) 10%, 
          var(--neonPink1) ${this.percentage-10}%,
          var(--bgcolor1) ${this.percentage}%,
          var(--bgcolor1) 0% 90%)`;
      }
      else if(this.color === 1){
        return `background-image:conic-gradient(
          from 0deg, 
          var(--bgcolor1) 0%,
          var(--aquaMarine1) 10%,
          var(--aquaMarine1) ${this.percentage-10}%,
          var(--bgcolor1) ${this.percentage}%,
          var(--bgcolor1) 0% 90%)`;
      }
      else{
        return `background-image:conic-gradient(
          from 0deg,
          var(--bgcolor1) 0%,
          var(--amber1) 10%,
          var(--amber1) ${this.percentage-10}%,
          var(--bgcolor1) ${this.percentage}%,
          var(--bgcolor1) 0% 90%)`;
      }
    }
  },
  methods:{
    setCircleAttrs(){
      if(this.$refs.svgCircle){
        this.r = this.$refs.svgCircle.clientHeight/4;
        this.c = { x:this.$refs.svgCircle.clientHeight/2.5, y:this.$refs.svgCircle.clientHeight/2.5 }
      }
    }
  },
  mounted(){
    setTimeout(() => {
      this.animStyle = "stroke-dashoffset:500";
      this.textOpac = "opacity:1";
    }, this.delay);
    window.addEventListener('resize',()=>{ 
      this.counter++
      this.setCircleAttrs();
    });
    this.$nextTick(()=>{
        this.setCircleAttrs();
    });
  }
}
</script>

<style scoped>
.progress-circle{
  width: 15vh;
  height: 15vh;
  margin-left: 1vw;
}
.circle-gradient{
  border-radius: 50%;
  /*border: 5px solid black;*/
  position: relative;
  transition: all 0.3s ease-in-out;
}
.circle-gradient[color='0']{
  background-image: radial-gradient(transparent 35%,black 72%),
    conic-gradient( 
			var(--neonPink1),  var(--neonPink2), var(--neonPink3));
  box-shadow: inset 0px 0px 5px var(--neonPink1),
              inset 0px 0px 10px var(--neonPink2);
}
.circle-gradient[color='1']{
  background-image: radial-gradient(transparent 35%,black 72%),
    conic-gradient( 
			var(--aquaMarine1),  var(--aquaMarine2), var(--aquaMarine3));
  box-shadow: inset 0px 0px 10px var(--aquaMarine1);
}
.circle-gradient[color='2']{
  background-image: radial-gradient(transparent 35%,black 72%),
    conic-gradient( 
			var(--amber1),  var(--amber2), var(--amber3));
  box-shadow: inset 0px 0px 5px var(--amber1),
              inset 0px 0px 10px var(--amber2);
  /*filter: drop-shadow( 0px 0px 5px var(--amber1));*/
}
.anim{
  height: 105%;
  width: 105%;
  margin: 0 auto;
  transform: rotate(-100deg);
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  z-index: 0;
}
.anim circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: var(--bgcolor1);
  stroke-width: 12vh;
  stroke-dasharray: 500;
  stroke-dashoffset: 1000; 
  /*transition: stroke-dasharray 1.5s ease;*/
  transition: stroke-dashoffset 3.5s ease;
  scale: 1.1;
}

.circle-gradient::after{
  content: "";
  position: absolute;
  width: calc(9.5vh - 8px);
  height: calc(9.5vh - 8px);
  z-index: 10;
  background-color: var(--bgcolor1);
  border-radius: 50%;
}

.circle-gradient::before{
  content: "";
  position: absolute;
  width: 9.5vh;
  height: 9.5vh;
  border-radius: 50%;
  background-color: var(--bgcolor1);
}

.circle-gradient[color='0']::before{
  border: 4px solid var(--neonPink1);
}
.circle-gradient[color='1']::before{
  border: 4px solid #0FD686;
}
.circle-gradient[color='2']::before{
  border: 4px solid #ff8300;
}

.circle-gradient[color='0'] p{
  color: var(--neonPink1);
  text-shadow: 
    0 0 10px var(--neonPink1),
    0 0 20px var(--neonPink1);
}

.circle-gradient[color='1'] p{
  color: var(--aquaMarine1);
  text-shadow: 
    0 0 10px var(--aquaMarine1),
    0 0 20px var(--aquaMarine1);
}

.circle-gradient[color='2'] p{
  color: var(--amber1);
  text-shadow: 
    0 0 10px var(--amber1),
    0 0 20px var(--amber1);
}

.circle-gradient p{
  z-index: 50;
  font-family: "Roboto-bold";
  opacity: 0;
  transition: opacity 1s, transform 0.75s ease;
}

.skill-name{
  font-size: 2.5vh;
  transform: translate(0,1vh);
  max-width: 7.3vh;
  word-wrap: break-word;
  text-align: center;
  /*translate: 0 1vh;*/
}

.skill-percent{
  font-size: 1.5vh;
  opacity: 0;
}

/*.progress-circle:hover .skill-name{
  transform: translate(0,-0.1vh);
}*/
.active .skill-name{
  transform: translate(0,-0.1vh);
}

.skill-name[fSize='0']{
  font-size: 1.75vh;
}
.skill-name[fSize='1']{
  font-size: 2vh;
}
.skill-name[fSize='2']{
  font-size: 2.5vh;
}

/*.progress-circle:hover .skill-percent{
  opacity: 1;
}*/
.active .skill-percent{
  opacity: 1;
}

.loader{
  position: absolute;
  border-radius: 50%;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  /*clip-path: circle(49.9% at center);*/
  /*background-image: conic-gradient(from 0deg, transparent 90%,  var(--bgcolor1) 0% 90%);*/
}

/*.loader::after{
  content: "";
  position: absolute;
  border: solid 0px black;
  z-index: 100;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  z-index: 0;
  border-radius: 50%;
  filter: blur(3px);

}*/
.glow{
  position: absolute;
  border-radius: 50%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -10;
  filter: blur(25px);
  transition: opacity 2s;
  transition-delay: 0.5s;
}
</style>

