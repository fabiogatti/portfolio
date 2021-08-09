<template>
    <div class="main-side">
        <div class="sidebar" :class="[ fullScreen ? 'full-sidebar' : 'normal-sidebar' ]">
            <div class="top-sidebar" :class="[ fullScreen ? 'scale-top' : '' ]">
                <div class="profile-div" :class="[ fullScreen ? '' : '' ]">
                    <img class='profile-pic' src="../assets/img/profile.png" alt="">
                    <p>{{ $t('sidebar.profilePicText') }}</p>
                </div>
                <div class="description-div">
                    <p class="name">Fabio Gatti</p>
                    <p class="position" v-show="!fullScreen">{{ $t('sidebar.frontendEngineer') }}</p>
                </div>
            </div>

            <div class="welcome-msg" v-show="fullScreen">
                <p>{{ $t('sidebar.welcomeMsg1') }}</p>
                <p>{{ $t('sidebar.welcomeMsg2') }}</p>
            </div>
            
            <div class="bottom-sidebar" :class="[ fullScreen ? 'bottom-full' : 'bottom-normal' ]">
                <div class="item" v-for="item in sidebarMenu" :key="item.id">
                    <sidebarTitle :item="item" :active="active" @clicked="handleLinkClicked(item.id)"></sidebarTitle>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="line" v-if="!fullScreen"></div>
        </transition>
    </div>
</template>

<script>
import sidebarTitle from "./sidebarTitle.vue";

export default {
    name:"sidebar",
    components: {
        sidebarTitle
    },
    data(){
        return{
            sidebarMenu:[ 
                { id:1, text:this.$t('sidebar.sidebarTitle1'), to:"/" },
                { id:2, text:this.$t('sidebar.sidebarTitle2'), to:"/skills" },
                { id:3, text:this.$t('sidebar.sidebarTitle3'), to:"/portfolio" },
                { id:4, text:this.$t('sidebar.sidebarTitle4'), to:"/contact" },
            ],
            active:0,
            fullScreen:true
        }
    },
    methods:{
        handleLinkClicked(id){
            if(this.fullScreen)
                this.fullScreen = false;
            this.active = id;
        }
    },
    created(){
        /*setTimeout(() => {
            this.fullScreen = false;
        }, 5000);*/
    }
}
</script>

<style>
@font-face {
  font-family: 'Neon Glow';
  src: url(https://assets.codepen.io/230569/NeonGlow-8VLz.ttf);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0
}
.main-side{
    display: flex;
    flex-direction: row;
}
.full-sidebar{
    width: 100vw;
}
.normal-sidebar{
    width: 20vw;
}
.sidebar{
    position: relative;
    height: 100vh;
    background-color: var(--bgcolor2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    z-index: 20;
    transition: width 1s ease-in-out;
}
p{
    font-family: 'Roboto Condensed', sans-serif;
}
.top-sidebar{
    height: 50%;
}
.scale-top{
    margin-top: 4vh;
    scale: 1.4;
}
.profile-div{
    margin-top: 10vh;
    border-radius: 50%;
    height: 17vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.35s;
}
.profile-div p{
    padding: 0 10px;
    visibility: hidden;
    position: absolute;
    color: #ffffff;
    opacity: 0;
    transition: visibility 0.35s, opacity 0.35s;
    text-align: center;
    font-size: 2vh;
}
.profile-div:hover p{
    opacity: 1;
    visibility: visible;
}
.profile-pic{
    height: 15vh;
    border-radius: 50%;
    box-shadow: 0 0 1rem var(--color);
    transition: 0.35s opacity;
}
.profile-div:hover .profile-pic{
    opacity: 0.3;
}
.description-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5vh;
}
.name{
    font-family: 'Neon Glow';
    text-shadow: 0 0 1.75rem var(--color);
    font-size: 4.5vh;
    color: var(--color);
    margin-top: 0.5em;
    font-weight: 100;
    user-select: none;
    /*animation-name:opacityAnim, nameAnim;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    */
    animation: opacityAnim 10s infinite, nameAnim 5s infinite;
    animation-delay: 0.3s;
}
.position{
    font-style: italic;
    font-size: 2.5vh;
    color: var(--color);
    margin-top: 0.25em;
    user-select: none;
    /*font-weight: 400;
    animation: colorAnim 5s infinite;
    animation-delay: 0.3s;*/
}
.welcome-msg{
    display: flex;
    flex-direction: column;
    color: rgb(197, 197, 197);
    animation: all 0.3s ease-in-out;
    margin-bottom: 10vh;
}
.welcome-msg p{
    animation: all 0.3s ease-in-out;
    font-size: 2vh;
    text-align: center;
}
.welcome-msg p:first-child{
    font-size: 4.5vh;
}
.sidebar-div{
    margin-top: 2em;
}
.bottom-full{
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    transition: all 0.3s ease-in-out;
}
.bottom-full .item{
    margin: 0 25px 0 25px;
}
.bottom-normal{
    display: flex;
    flex-direction: column;
}
.line{
    width: 5px;
    height: 100vh;
    background: linear-gradient(318deg, #2af598, #08aeea);
    background-size: 400% 400%;
    box-shadow: 0 0 40px 10px #18aeca;
    animation: backAnim 5s infinite;
    animation-delay: 0.3s;
    z-index: 10;
}
@keyframes colorAnim {
    0%{color: var(--color1) }
    50%{color: var(--color2) }
    100%{color: var(--color1) }
}
@keyframes nameAnim {
    0%{color: var(--color1); text-shadow: 0 0 1.75rem var(--color1); }
    50%{color: var(--color2); text-shadow: 0 0 1.75rem var(--color2); }
    100%{color: var(--color1); text-shadow: 0 0 1.75rem var(--color1); }
}
@keyframes opacityAnim {
    0%,
    2%,
    5%{
        opacity: 0;
    }
    1%,
    3%,
    6%{
        opacity: 1;
    }
}
@keyframes backAnim {
    0%{background-position:50% 0%; box-shadow:0 0 30px 10px #18aeca }
    50%{background-position:50% 100%; box-shadow: 0 0 30px 10px #2af598 ;}
    100%{background-position:50% 0%; box-shadow:0 0 30px 10px #18aeca;}
}

</style>