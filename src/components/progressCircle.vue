<template>
  <div class="progress-circle" :key="counter" :class="active ? 'active' : ''" @mouseenter="$emit('hover',true)" @mouseleave="$emit('hover',false)"> 
    <div :color="color" class="circle-gradient w-full h-full flex justify-center items-center">
      <div class="loader" :style="loaderStyle"></div>
      <svg class="anim" ref="svgCircle">
        <!--<circle r="45" cx="50" cy="50" class="pie" :style="animStyle"/>-->
        <circle :r="r" :cx="c.x" :cy="c.y" class="pie" :style="animStyle" :key="r"/>
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
      return  "background-image:conic-gradient(from 0deg, transparent "+this.percentage+"%,  var(--bgcolor1) 0% 90%)";
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
      this.animStyle = "strokeDasharray:0 500";
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
  border: 2px solid black;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.circle-gradient[color='0']{
  background-image: radial-gradient(transparent 55%,black 75%),
    conic-gradient( 
			var(--neonPink1),  var(--neonPink2), var(--neonPink3), var(--neonPink2), var(--neonPink1));
}
.circle-gradient[color='1']{
  background-image: radial-gradient(transparent 55%,black 75%),
    conic-gradient( 
			var(--aquaMarine1),  var(--aquaMarine2), var(--aquaMarine3), var(--aquaMarine2), var(--aquaMarine1));
}
.circle-gradient[color='2']{
  background-image: radial-gradient(transparent 55%,black 75%),
    conic-gradient( 
			var(--amber1),  var(--amber2), var(--amber3), var(--amber2), var(--amber1));
}
.anim{
  height: 105%;
  width: 105%;
  margin: 0 auto;
  transform: rotate(-90deg);
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
}
.anim circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: var(--bgcolor1);
  stroke-width: 12vh;
  stroke-dasharray: 500;
  stroke-dashoffset: -1000; 
  /*transition: stroke-dasharray 1.5s ease;*/
  transition: stroke-dasharray 5.5s ease;
  scale: 1.1;
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
  border: 3px solid var(--neonPink1);
}
.circle-gradient[color='1']::before{
  border: 3px solid #0FD686;
}
.circle-gradient[color='2']::before{
  border: 3px solid #FF8300;
}

.circle-gradient p{
  color: var(--color1);
  text-shadow: 
    0 0 10px var(--color1),
    0 0 20px var(--color1);
  z-index: 10;
  font-family: "Roboto-bold";
  opacity: 0;
  transition: opacity 1s, transform 0.75s ease;
}

.skill-name{
  font-size: 2.5vh;
  transform: translate(0,1vh);
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
  font-size: 2.5vh;
}
.skill-name[fSize='2']{
  font-size: 3vh;
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
  /*background-image: conic-gradient(from 0deg, transparent 90%,  var(--bgcolor1) 0% 90%);*/
}
</style>

