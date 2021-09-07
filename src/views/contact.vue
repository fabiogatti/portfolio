<template>
  <div class="routeContent h-full w-full flex flex-col justify-center contact">
      <p class="contentTitle" :colortitle="titleColor" @click="$emit('changeTitle')">{{ $t('contact.title1') }}</p>
      <p class="contentSubtitle mt2">{{ $t('contact.subtitle1') }}</p>
      <p class="contentText mt2">{{ $t('contact.contactText1') }}</p>
      <p class="contentText mt4">{{ $t('contact.contactText2') }}</p>
      <div class="flex flex-row mt4">
        <div class="flex flex-col items-center side-text">
          <p class="contentSubtitle">{{ $t('contact.subtitle2') }}</p>
          <button class="email-button flex flex-row items-center mt4" @click="openMail"><font-awesome-icon class="email-icon mr-2" icon="envelope"/>{{ $t('contact.contactButton') }}!</button>
        </div>
        <div class="divider ml2"></div>
        <div class="flex flex-col items-center side-text ml6" @mouseenter="hoverRight = true" @mouseleave="hoverRight = false">
          <p class="contentSubtitle">{{ $t('contact.subtitle3') }}</p>
          <div class="flex flex-row justify-center mt4">
            <div class="icon-container" @click="handleIconClick(0)">
              <p class="clicked-icon fade0">{{ $t('contact.copied') }}</p>
              <div class="contact-icon icon-skype">
              </div>
            </div>
            <div class="icon-container icon-margin" @click="handleIconClick(1)">
              <p class="clicked-icon fade1">{{ $t('contact.copied') }}!</p>
              <div class="contact-icon icon-linkedin icon1">
              </div>
            </div>
            <div class="icon-container icon-margin" @click="handleIconClick(2)">
              <p class="clicked-icon fade2">{{ $t('contact.copied') }}!</p>
              <div class="contact-icon icon-github">
              </div>
            </div>
          </div>
          <p class="contentText fading-text mt2" :style="[ hoverRight ? {opacity:1} : {opacity:0}]">{{ $t('contact.clickCopy') }}</p>
        </div>
      </div>
      
      
      
      <svg>
        <defs>
          <clipPath id="skype" :style="clipStyle">
            <path d="M388,280.15A149.24,149.24,0,0,0,391.24,250,141.08,141.08,0,0,0,250.1,108.89,145.47,145.47,0,0,0,220,112.12a76.9,76.9,0,0,0-107.93,107.8A149.22,149.22,0,0,0,108.82,250,141.09,141.09,0,0,0,250,391.18a144.87,144.87,0,0,0,30.11-3.24A76.9,76.9,0,0,0,404,327,75.78,75.78,0,0,0,388,280.15Zm-133.78,62.9c-45.1,0-82.84-20.07-82.84-44.69,0-11,6.18-21,20.28-21,21.45,0,23.44,30.87,60.56,30.87,17.67,0,29.08-7.84,29.08-18.09,0-12.85-11-14.84-28.87-19.24-43-10.59-81-15.13-81-60,0-40.7,40.29-55.76,75-55.76,37.88,0,76.17,15.06,76.17,38.09,0,11.62-7.83,21.86-20.83,21.86-19.45,0-20.07-23-51.56-23-17.67,0-28.87,4.81-28.87,15.47,0,13.61,14.3,15,47.5,22.68,28.46,6.4,62.36,18.43,62.36,53.35,0,40.63-39.26,59.47-77,59.47Z" />
            <path d="M270.58,495.08H4.92v-266A224.14,224.14,0,0,1,229.08,4.92h266V270.58a224.48,224.48,0,0,1-224.5,224.5Zm-235.66-30H270.58c107.25,0,194.5-87.25,194.5-194.5V34.92h-236C122,34.92,34.92,122,34.92,229.08Z"/>
            <!--<path d="M229.08,4.92A224.14,224.14,0,0,0,4.92,229.08v266H270.58a224.48,224.48,0,0,0,224.5-224.5V4.92ZM338.6,427.24a88.25,88.25,0,0,1-54-18.44A167.49,167.49,0,0,1,250,412.52,162.41,162.41,0,0,1,87.48,250a171.79,171.79,0,0,1,3.72-34.66A88.52,88.52,0,0,1,215.45,91.28a167,167,0,0,1,34.67-3.72A162.41,162.41,0,0,1,412.6,250a172.59,172.59,0,0,1-3.72,34.66h0a87.34,87.34,0,0,1,18.36,53.9A88.7,88.7,0,0,1,338.6,427.24Z"/>
            <path d="M271.72,227.25C233.5,218.38,217,216.8,217,201.13c0-12.27,12.9-17.81,33.24-17.81,36.24,0,37,26.51,59.35,26.51,15,0,24-11.79,24-25.16,0-26.52-44.08-43.85-87.69-43.85-40,0-86.34,17.33-86.34,64.19,0,51.6,43.76,56.82,93.23,69,20.58,5.07,33.24,7.36,33.24,22.16,0,11.79-13.14,20.81-33.48,20.81-42.74,0-45-35.53-69.72-35.53-16.23,0-23.35,11.55-23.35,24.22,0,28.33,43.45,51.44,95.37,51.44,43.45,0,88.64-21.69,88.64-68.46C343.51,248.46,304.49,234.61,271.72,227.25Z"/>-->
          </clipPath>
        </defs>
      </svg>
      <svg>
        <defs>
          <clipPath id="linkedin" :style="clipStyle">
            <path d="M173,389.38H115.22V203.26H173Zm-28.92-211.5a33.63,33.63,0,1,1,33.47-33.79C177.56,162.57,162.56,177.88,144.09,177.88Zm245.23,211.5H331.65v-90.6c0-21.59-.43-49.28-30-49.28C271.55,249.5,267,273,267,297.22v92.16H209.22V203.26h55.43v25.39h.81C273.17,214,292,198.6,320.14,198.6c58.49,0,69.25,38.51,69.25,88.54V389.38Z" />
            <path d="M270.58,495.08H4.92v-266A224.14,224.14,0,0,1,229.08,4.92h266V270.58a224.48,224.48,0,0,1-224.5,224.5Zm-235.66-30H270.58c107.25,0,194.5-87.25,194.5-194.5V34.92h-236C122,34.92,34.92,122,34.92,229.08Z"/>-->
            <!--<path d="M229.08,4.92A224.14,224.14,0,0,0,4.92,229.08v266H270.58a224.48,224.48,0,0,0,224.5-224.5V4.92ZM173,389.38H115.22V203.26H173Zm-28.92-211.5a33.63,33.63,0,1,1,33.47-33.79C177.56,162.57,162.56,177.88,144.09,177.88Zm245.3,211.5H331.65v-90.6c0-21.59-.43-49.28-30-49.28C271.55,249.5,267,273,267,297.22v92.16H209.22V203.26h55.43v25.39h.81C273.17,214,292,198.6,320.14,198.6c58.49,0,69.25,38.51,69.25,88.54Z"/>-->
          </clipPath>
        </defs>
      </svg>
      <svg>
        <defs>
          <clipPath id="github" :style="clipStyle">
            <path d="M220.23,176.82H160.78c-30-7.87-97.84-5.82-97.84,56.07,0,22.56,11.25,38.41,26.24,45.74C70.36,295.87,61.44,304,61.44,315.52c0,8.25,3.35,15.85,13.41,20.1C64.16,345.68,58.06,353,58.06,366.7c0,24.08,21,38.1,76.2,38.1,53,0,83.81-19.8,83.81-54.86,0-44-33.85-42.37-113.68-47.24l10.07-16.16c20.44,5.69,89,7.5,89-50.9,0-14-5.79-23.77-11.24-30.79l28-2.13ZM172.68,358.18c0,24-78.65,24.07-78.65,1.83,0-6.11,4-11.25,7.93-16.15C160.22,347.83,172.68,346.38,172.68,358.18Zm-38.1-100.9c-39.59,0-37.83-53.35.9-53.35C172.62,203.93,173.58,257.28,134.58,257.28Zm99.94,75.36V308.57c20.06-2.74,20.43-1.5,20.43-8.25v-89.6c0-6.37-1.54-5.53-20.43-12.19l3.36-24.68H301V300.34c0,4.88.3,5.49,4.89,6.1l15.54,2.13v24.07Zm39.33-183.18c-17.37,0-27.43-10.07-27.43-27.45S256.48,95.2,273.85,95.2c17.68,0,27.74,9.46,27.74,26.81S291.53,149.46,273.85,149.46ZM441.94,320.82c-13.11,6.4-32.31,12.19-49.69,12.19-36.28,0-50-14.62-50-49.08V204.08c0-4.07.79-3.05-23.78-3.05V173.9c26.83-3.05,37.49-16.5,40.84-49.69h29c0,49.36-1,46.34,2.44,46.34h43V201h-45.4v72.84c0,5.19-3.69,38.55,45.41,20.13Z" />
            <path d="M270.58,495.08H4.92v-266A224.14,224.14,0,0,1,229.08,4.92h266V270.58a224.48,224.48,0,0,1-224.5,224.5Zm-235.66-30H270.58c107.25,0,194.5-87.25,194.5-194.5V34.92h-236C122,34.92,34.92,122,34.92,229.08Z"/>
            <!--<path d="M94,360c0,22.24,78.65,22.21,78.65-1.83,0-11.8-12.46-10.35-70.72-14.32C98,348.76,94,353.9,94,360Z"/>
            <path d="M135.48,203.93c-38.73,0-40.49,53.35-.9,53.35C173.58,257.28,172.62,203.93,135.48,203.93Z"/>
            <path d="M229.08,4.92A224.14,224.14,0,0,0,4.92,229.08v266H270.58a224.48,224.48,0,0,0,224.5-224.5V4.92ZM203.45,235.64c0,58.4-68.55,56.59-89,50.9L104.39,302.7c79.83,4.87,113.68,3.26,113.68,47.24,0,35.06-30.77,54.86-83.81,54.86-55.17,0-76.2-14-76.2-38.1,0-13.72,6.1-21,16.79-31.08-10.06-4.25-13.41-11.85-13.41-20.1,0-11.51,8.92-19.65,27.74-36.89-15-7.33-26.24-23.18-26.24-45.74,0-61.89,67.85-63.94,97.84-56.07h59.45l0,25.9-28,2.13C197.66,211.87,203.45,221.62,203.45,235.64ZM273.85,95.2c17.68,0,27.74,9.46,27.74,26.81s-10.06,27.45-27.74,27.45c-17.37,0-27.43-10.07-27.43-27.45S256.48,95.2,273.85,95.2Zm47.56,237.44H234.52V308.57c20.06-2.74,20.43-1.5,20.43-8.25v-89.6c0-6.37-1.54-5.53-20.43-12.19l3.36-24.68H301V300.34c0,4.88.3,5.49,4.89,6.1l15.54,2.13Zm70.84.37c-36.28,0-50-14.62-50-49.08V204.08c0-4.07.79-3.05-23.78-3.05V173.9c26.83-3.05,37.49-16.5,40.84-49.69h29c0,49.36-1,46.34,2.44,46.34h43V201h-45.4v72.84c0,5.19-3.69,38.55,45.41,20.13l8.24,26.82C428.83,327.22,409.63,333,392.25,333Z"/>-->
          </clipPath>
        </defs>
      </svg>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name:'Contact',
  props:['titleColor'],
  data(){
    return{
      color:1,
      clipStyle:'',
      hoverRight:false,
      contactValues:['live:fabio.gatti_3','https://www.linkedin.com/in/fabiogatti94/','https://github.com/fabiogatti']
    }
  },
  methods:{
    handleIconClick(num){
      const el = document.createElement('textarea');
      el.value = this.contactValues[num];
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      anime.timeline()
      .add({
        targets: '.fade'+num,
        translateY:0,
        translateX: '-50%',
        opacity:0,
        easing: 'linear',
        duration: 10
      })
      .add({
        targets: '.fade'+num,
        translateY: '-4vh',
        translateX: '-50%',
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 500
      }).add({
        targets: '.fade'+num,
        translateY:'-6vh',
        translateX: '-50%',
        opacity:0,
        easing: 'easeInOutSine',
        delay: 1500,
        duration: 500
      }).add({
        targets: '.fade'+num,
        translateY:0,
        translateX: '-50%',
        opacity:0,
        easing: 'linear',
        delay: 50,
        duration: 10
      });
    },
    openMail(){
      var link = "mailto:fabio.gatti@hotmail.com"
             + "?cc="
             + "&subject=" + encodeURIComponent("Frontend position: ")
             + "&body=" + encodeURIComponent("Hi there! I am contacting you because...");
    
      window.location.href = link;
    }
  },
  mounted(){
    this.clipStyle = 'transform: scale('+window.innerHeight/11000+','+window.innerHeight/11000+')'
    window.addEventListener('resize',()=>{
      this.clipStyle = 'transform: scale('+window.innerHeight/11000+','+window.innerHeight/11000+')'
    });
  }
}
</script>

<style lang="scss" scoped>
svg { 
  display: block; 
  height: 0; 
  width: 0; 
}
.icon-container{
  width: 5vh;
  height: 5vh;
  cursor: pointer;
  position: relative;
  margin-left: 1vh;
}
.contact-icon{
  height: 5vh;
  width: 5vh;
  /*background-image: linear-gradient(to bottom right, var(--neonPink1) 15%, var(--aquaMarine1) 30%, var(--amber1) 65%, var(--color2) 85%);*/
  /*background-image: linear-gradient(to bottom right, var(--aquaMarine1) 15%, var(--neonPink1) 30%, var(--amber1) 65%, var(--aquaMarine3) 85%);*/
  background-image: linear-gradient(to bottom right, var(--aquaMarine1) 15%, var(--neonPink1) 30%, var(--neonPink2) 65%, var(--aquaMarine2) 85%);
  background-size: 200% 200%;
  transition: all 0.5s ease-in-out;
}
.icon-skype{
  -webkit-clip-path: url(#skype);
  clip-path: url(#skype);
}
.icon-linkedin{
  -webkit-clip-path: url(#linkedin);
  clip-path: url(#linkedin);
}
.icon-github{
  -webkit-clip-path: url(#github);
  clip-path: url(#github);
}
.icon-border{
  stroke-miterlimit:10;
  stroke-width:20px;
  fill: none;
  stroke:#070308;
}

.icon-container:hover .contact-icon{
  background-position: 100% 100%;
  transform: scale(1.1);
}

.side-text{
  width:calc(50% - 10px);
}

.divider{
  transition: all 0.3s ease;
  border-radius: 25px;
  width: 6px;
  height: 100%;
  border: solid 3px var(--neonPink1);
  background-color: var(--neonPink1);
  box-shadow: 
    0 0 10px var(--neonPink1),
    0 0 20px var(--neonPink1);
}

.fading-text{
  transition: opacity 0.5s ease-in-out;
}

.clicked-icon{
  position: absolute;
  opacity: 0;
  color: var(--aquaMarine1);
  font-size: 2vh;
  font-family: 'Neon';
  left:50%;
  /*translate: -50% 0;*/
  transform: translateX(-50%);
}

.email-button{
  position: relative;
  text-decoration:none;
  outline-style: none;
  /*border-radius: 25px;
  border: 2px solid var(--aquaMarine1);*/
  color: var(--aquaMarine1);
  padding:1vh 4vh;
  font-size: 2.5vh;
  border: 2px solid var(--aquaMarine1);
  border-radius: 30px;
  transition: all 0.45s ease-in-out;
}

.email-icon{
  width: 2.5vh;
  height: 2.5vh;
}

.email-button::before{
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: var(--aquaMarine1);
  border-radius: 30px;
  content: '';
  mix-blend-mode: color-burn;
  opacity: 0;
  transition: all 0.45s ease-in-out;
}

.email-button:hover::before{
  opacity: 1;
}

.email-button:hover{
  color: unset;
  box-shadow: 
    0 0 10px var(--aquaMarine1),
    0 0 30px var(--aquaMarine1);
}


.icon-margin{
  margin-left: 1.5vw;
}

@media (max-aspect-ratio: 1/1) {
  .icon-margin{
    margin-left: 3vw;
  }
}

@media (max-aspect-ratio: 5/8) {
  .email-button{
    font-size: 2vh;
    padding:1vh 2vh;
  }
  .clicked-icon{
    font-size: 1.85vh;
  }
  .divider{
    width: 3px;
    border: solid 1.5px var(--neonPink1);
    box-shadow: 0 0 10px var(--neonPink1), 0 0 20px var(--neonPink1);
  }
}
</style>