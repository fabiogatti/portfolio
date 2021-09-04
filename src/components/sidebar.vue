<template>
    <div class="navbar">
        <div class="main-side">
            <div class="sidebar" :class="[ full ? '' : 'normal-sidebar' ]">
                <div class="top-sidebar anim-end" :class="[ fullScreen ? 'scale-top' : '' ]">
                    <div class="profile-div" :class="[ fullScreen ? '' : '' ]">
                        <img class='profile-pic' src="../assets/img/profile.png" alt="">
                        <p>{{ $t('sidebar.profilePicText') }}</p>
                    </div>
                    <div class="description-div">
                        <p class="name">Fabio Gatti</p>
                        <p class="position font-neon" v-show="!fullScreen">{{ $t('sidebar.frontendEngineer') }}</p>
                    </div>
                </div>

                <div class="welcome-msg anim-end" v-show="fullScreen" :style="[ windowSize==0 ? {transform:'scale(0.8)'}:{}]">
                    <p class="font-neon">{{ $t('sidebar.welcomeMsg1') }}</p>
                    <p class="font-neon">{{ $t('sidebar.welcomeMsg2') }}</p>
                </div>
                
                <div class="bottom-sidebar" :class="[ fullScreen && windowSize > 0 ? 'bottom-full' : 'bottom-normal' ]">
                    <div class="item anim-end" v-for="item in sidebarMenu" :key="item.id">
                        <sidebarTitle :item="item" :active="active" :full="fullScreen" @clicked="handleLinkClicked(item.id)"></sidebarTitle>
                    </div>
                </div>
            </div>
            <transition name="fadeRight">
                <div class="line" v-if="!fullScreen"></div>
            </transition>
            
        </div>
        <div class="mobile-nav flex flex-row items-center justify-around" style="opacity:0">
            <div v-for="item in sidebarMenu" :key="item.id+'nav'">
                <mobileNavItem :item="item" :active="active" @clicked="handleLinkClicked(item.id)"></mobileNavItem>
            </div>
        </div>
    </div>
    
</template>

<script>
import sidebarTitle from "./sidebarTitle.vue";
import mobileNavItem from "./mobileNavItem.vue";
import anime from 'animejs';

export default {
    name:"sidebar",
    props:['full','activeElem','windowSize'],
    components: {
        sidebarTitle,
        mobileNavItem
    },
    data(){
        return{
            sidebarMenu:[ 
                { id:1, text:this.$t('sidebar.sidebarTitle1'), to:"/", icon:'user', mobileText:this.$t('sidebar.sidebarTitle1/5') },
                { id:2, text:this.$t('sidebar.sidebarTitle2'), to:"/skills", icon:'cogs', mobileText:this.$t('sidebar.sidebarTitle2') },
                { id:3, text:this.$t('sidebar.sidebarTitle3'), to:"/portfolio", icon:'briefcase', mobileText:this.$t('sidebar.sidebarTitle3') },
                { id:4, text:this.$t('sidebar.sidebarTitle4'), to:"/contact", icon:'phone', mobileText:this.$t('sidebar.sidebarTitle4') },
            ],
            active:0,
            fullScreen:true
        }
    },
    methods:{
        handleLinkClicked(id){
            if(this.fullScreen){
                if(this.windowSize == 2){
                    anime.timeline()
                        .add({
                            targets: '.top-sidebar',
                            translateY: -50,
                            opacity: 0,
                            duration: 600,
                            easing: 'easeOutExpo',
                        })
                        .add({
                            targets: '.welcome-msg',
                            translateY: -50,
                            opacity: 0,
                            duration: 600,
                            easing: 'easeOutExpo',
                        })
                        .add({
                            targets: '.item',
                            translateY: -50,
                            opacity: 0,
                            duration: 600,
                            easing: 'easeOutExpo',
                        })
                        .add({
                            targets: '.mobile-nav',
                            translateX: '50%',
                            translateY: '5vh',
                            opacity: 0,
                            duration: 10,
                            easing: 'easeInExpo',
                            begin: function() {
                                document.querySelector('.mobile-nav').style.display = 'none';
                            },
                        })
                        .add({
                            targets: '.sidebar',
                            width: '20vw',
                            duration: 300,
                            easing: 'easeOutExpo',
                            delay: 0,
                            begin:()=>{
                                this.fullScreen = false;
                                this.$emit('removefull');
                            }
                        })
                        .add({
                            targets: '.anim-end',
                            translateY: 0,
                            translateX: -30,
                            opacity: 0,
                            duration: 10,
                            easing: 'easeInExpo',
                            
                        })
                        .add({
                            targets: '.anim-end',
                            translateX: 0,
                            opacity: 1,
                            duration: 800,
                            easing: 'easeInExpo',
                            delay:500
                        });
                    }
                else{
                    anime.timeline()
                        .add({
                            targets: '.top-sidebar',
                            translateY: -50,
                            opacity: 0,
                            duration: 600,
                            easing: 'easeOutExpo',
                        })
                        .add({
                            targets: '.welcome-msg',
                            translateY: -50,
                            opacity: 0,
                            duration: 600,
                            easing: 'easeOutExpo',
                        })
                        .add({
                            targets: '.item',
                            translateY: -50,
                            opacity: 0,
                            duration: 600,
                            easing: 'easeOutExpo',
                        })
                        .add({
                            targets: '.mobile-nav',
                            translateY: '7.5vh',
                            translateX: '50%',
                            opacity: 0,
                            duration:10,
                            easing:'easeOutExpo',
                        })
                        .add({
                            targets: '.sidebar',
                            width: '0vw',
                            duration: 300,
                            easing: 'easeOutExpo',
                            complete:()=>{
                                setTimeout(() => {
                                    this.fullScreen = false;
                                    this.$emit('removefull');
                                }, 250);
                            }
                        })
                        .add({
                            targets: '.mobile-nav',
                            translateY: '0px',
                            translateX: '50%',
                            opacity: 1,
                            duration: 500,
                            easing:'easeOutExpo',
                            delay:1000,
                        })
                        .add({
                            targets: '.anim-end',
                            translateY: 0,
                            translateX: -30,
                            opacity: 0,
                            duration: 10,
                            easing: 'easeInExpo',
                        })
                }
            }
            console.log('clicked!');
            this.active = id;
        }
    },
    created(){
        if(this.full){
            this.fullScreen = this.full;
        }
        else if(this.full == false){
            this.fullScreen = this.full;
        }
    },
    mounted(){
        setTimeout(() => {
            anime.timeline()
            .add({
                targets: '.sidebar',
                translateY: -25,
                duration: 100,
                easing: 'easeOutExpo',
            })
            .add({
                targets: '.sidebar',
                translateY: 0,
                opacity: 1,
                duration: 600,
                easing: 'easeOutExpo',
            });
        }, 100);
        if(this.activeElem != 0){
            this.active = this.activeElem;
        }
    },
    watch:{
        windowSize(newVal,oldVal){
            if(!this.full){
                if(oldVal < 2 && newVal==2){
                    anime({
                        targets: '.mobile-nav',
                        translateY: '7.5vh',
                        translateX: '50%',
                        opacity: 0,
                        duration: 1000,
                        easing: 'easeOutExpo',
                        complete: function() {
                            console.log('done');
                            document.querySelector('.mobile-nav').style.display = 'none';
                        },
                    })
                    anime.timeline()
                        .add({
                            targets: '.sidebar',
                            width: '20vw',
                            opacity: 1,
                            duration: 400,
                            delay: 300,
                            easing: 'easeInExpo',
                            begin:()=>{
                                this.$emit('routerpos','relative');
                            }
                        })
                        .add({
                            targets: '.anim-end',
                            translateX: 0,
                            opacity: 1,
                            duration: 500,
                            delay: 750,
                            easing: 'linear'
                        })
                }
                else if(oldVal == 2 && newVal < 2){
                    anime({
                        targets: '.mobile-nav',
                        translateY: 0,
                        translateX: '50%',
                        opacity: 1,
                        duration: 800,
                        delay:350,
                        easing: 'easeInExpo',
                        begin: function() {
                            document.querySelector('.mobile-nav').style.display = 'flex';
                        },
                    });
                    anime.timeline()
                        .add({
                            targets: '.anim-end',
                            translateX: -30,
                            opacity: 0,
                            duration: 250,
                            easing: 'linear',
                        })
                        .add({
                            targets: '.sidebar',
                            width: 0,
                            duration: 500,
                            easing: 'easeOutExpo',
                            complete:()=>{
                                setTimeout(() => {
                                    this.$emit('routerpos','absolute');
                                }, 800);
                            }
                        })
                }
            }
            
        }
    }
}
</script>

<style lang="scss">
.main-side{
    display: flex;
    flex-direction: row;
    /*background-color: var(--bgcolor2);*/
}
.sidebar{
    width: 100vw;
    position: relative;
    height: 100vh;
    opacity: 0;
    background-color: var(--bgcolor2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    z-index: 20;
    transition: width 1s ease-in-out;
}
.normal-sidebar{
    width: 20vw;
}
p{
    font-family: 'Roboto-ondensed', sans-serif;
}
.top-sidebar{
    height: 50%;
}
.scale-top{
    margin-top: 4vh;
    transform: scale(1.4);
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
    font-family: 'Neon-glow';
    text-shadow: 0 0 1.75rem var(--color);
    font-size: 4.5vh;
    color: var(--color);
    margin-top: 0.5em;
    font-weight: 100;
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
    color: var(--subtitleColor);
    margin-top: 0.25em;
    /*font-weight: 400;
    animation: colorAnim 5s infinite;
    animation-delay: 0.3s;*/
}
.welcome-msg{
    display: flex;
    flex-direction: column;
    color: var(--grey1);
    margin-bottom: 10vh;
}
.welcome-msg p{
    transition: all 0.3s ease-in-out;
    font-size: 2.5vh;
    text-align: center;
}
.welcome-msg p:first-child{
    font-size: 4.5vh;
    color: var(--subtitleColor);
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
.mobile-nav{
    z-index: 150;
    width: 50vw;
    position: absolute;
    bottom: 0;
    height: 7.5vh;
    /*background-color: var(--colorWhite);*/
    right:50%;
    transform: translate(50%);
    padding: 1vh 1vh 0 1vh;
    border-radius: 15px 15px 0 0;
    transition: all 0.3s ease-in-out;

    background: rgba( 255, 255, 255, 0.30 );
    background: linear-gradient(to top, --colorWhite, --bgcolor1);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.0px );
    -webkit-backdrop-filter: blur( 6.0px );
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

@media (max-aspect-ratio: 8/5) {
    .line{
        display: none;
    }
}

@media (max-aspect-ratio: 1/1) {
    .scale-top{
        transform:scale(1.15);
        .profile-div{
            margin-top: 5vh;
        }
    }
    .top-sidebar{
        height: 35vh;
    }
    .welcome-msg{
        margin-bottom: 1vh;
        height: 20vh;
    }
    .normal-sidebar{
        display: none;
    }
    .mobile-nav{
        width: 100vw;
        border-radius: 0;
        .nav-text{
            font-size: 1.5vh;
        }
    }
    .item{
        margin-bottom: 1vh;
    }
    .bottom-sidebar{
        align-items: center;
    }
}

</style>