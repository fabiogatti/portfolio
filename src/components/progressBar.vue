<template>
<div class="progress-bar">
  <p class="bar-text" :fSize='fSize' :color="color">{{ text }}</p>
  <div class="progress-bar-line ml2">
    <div class="bar" :color="color" :style="[{width:percent}]">
      <div class="bar-circle">
        <p class="bar-number">{{ animePercent.p1 }}</p>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import anime from 'animejs';

export default {
  name:'progressBar',
  props:['color','percentage','delay','text','fSize'],
  data(){
    return{
      percent:'0',
      animePercent:{p1:0}
    }
  },
  mounted(){
    setTimeout(() => {
      this.percent = this.percentage+'%';
      anime({
        targets:this.animePercent,
        p1:this.percentage,
        round: 1,
        duration: 1350,
        easing: 'cubicBezier(.37,.58,.52,.89)'
      })
    }, this.delay);
  }
}
</script>

<style lang="scss" scoped>
.progress-bar{
  --background: var(--bgcolor2);
  --textColor: var(--aquaMarine1);
  --color0: var(--neonPink1);
  --color01: var(--neonPink3);
  --color1: var(--aquaMarine1);
  --color11: var(--aquaMarine3);
  --color2: var(--amber1);
  --color21: var(--amber3);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.progress-bar-line{
  width: 75%;
  background-color: var(--background);
  border-radius: 25px;
  height: 2vh;
}
.bar-text{
  color: var(--textColor);
  width: 25%;
  font-family: 'Neon';
  text-align: center;
  font-size: 2.5vh;
}
.bar-text[fSize='0']{
  font-size: 2vh;
}
.bar-text[fSize='1']{
  font-size: 2.5vh;
}
.bar-text[fSize='2']{
  font-size: 2vh;
}
.bar-text[color='0']{
  color: var(--color0);
}
.bar-text[color='1']{
  color: var(--color1);
}
.bar-text[color='2']{
  color: var(--color2);
}
.bar{
  width: 0;
  height: 2vh;
  transition: all 1.35s cubic-bezier(.37,.58,.52,.89);
  border-radius: 25px;
  position: relative;
}
.bar[color='0']{
  background-color: var(--color0);
  background: linear-gradient(to bottom right, var(--color0), var(--color01));
  filter: drop-shadow(0 0 7.5px var(--color0));
}
.bar[color='1']{
  background-color: var(--color1);
  background: linear-gradient(to bottom right, var(--color1), var(--color11));
  filter: drop-shadow(0 0 7.5px var(--color1));
}
.bar[color='2']{
  background-color: var(--color2);
  background: linear-gradient(to bottom right, var(--color2), var(--color21));
  filter: drop-shadow(0 0 7.5px var(--color2));
}
.bar[color='0'] .bar-circle{
  border-color: var(--color01);
  color: var(--color01);
}
.bar[color='1'] .bar-circle{
  border-color: var(--color11);
  color: var(--color11);
}
.bar[color='2'] .bar-circle{
  border-color: var(--color21);
  color: var(--color21);
}
.bar-circle{
  position: absolute;
  right: 0;
  height: 2vh;
  width: 2vh;
  transform: scale(1.7);
  background-color: var(--bgcolor1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0.2vh;
  border-style: solid;
}
.bar-number{
  font-size: 0.95vh;
  font-weight: bold;
  z-index: 50;
  font-family: 'Scada';
}
/*.bar-circle::before{
  content: '';
  border-radius: 50%;
  height: 2vh;
  width: 2vh;
  background-color: var(--bgcolor1);
  position: absolute;
}*/
/*.bar::after{
  content: '';
  right: 0;
  border-radius: 50%;
  height: 2vh;
  width: 2vh;
  background-color: var(--grey1);
  transform: scale(1.4);
  position: absolute;
}*/
</style>