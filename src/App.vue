<template>
  <div id="app">
    <div id="nav" v-bind:class="{'hide-up-nav':menuHidden,'hide-menu-shadow':hideMenuShadow}">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="left-nav">
        <div class="fadeIn logo-top" v-wow data-wow-delay=".5s" data-wow-duration=".5s">
          <a href="/"><img src="./assets/sitelogo.svg" alt=""></a>
        </div>
      </div>
      <div class="right-nav">
        <ol class="desktop">
          <li class="fadeInDown" v-wow data-wow-delay="0s" data-wow-duration=".1s"><a href="#about" v-smooth-scroll>About</a></li>
          <li class="fadeInDown" v-wow data-wow-delay="0s" data-wow-duration=".6s"><a href="#works" v-smooth-scroll>Works</a></li>
          <li class="fadeInDown" v-wow data-wow-delay="0s" data-wow-duration="1.1s"><a href="#contact" v-smooth-scroll>Contact</a></li>
          <li class="fadeInDown head-cta" v-wow data-wow-delay="0s" data-wow-duration="1.7s"><a href="#">Resume</a></li>
        </ol>
        <div class="burger-menu-container" v-on:click="mobilenav()" :class="{'active':mobileNavIsActive}">
          <div class="burger-menu">
          </div>
        </div>
        <ol class="mobile" :class="{'active':mobileNavIsActive}">
          <li v-on:click="mobilenav()" class="fadeInDown" v-wow data-wow-delay="0s" data-wow-duration=".1s"><a href="#about" v-smooth-scroll>About</a></li>
          <li v-on:click="mobilenav()" class="fadeInDown" v-wow data-wow-delay="0s" data-wow-duration=".6s"><a href="#works" v-smooth-scroll>Works</a></li>
          <li v-on:click="mobilenav()" class="fadeInDown" v-wow data-wow-delay="0s" data-wow-duration="1.1s"><a href="#contact" v-smooth-scroll>Contact</a></li>
          <li v-on:click="mobilenav()" class="fadeInDown head-cta" v-wow data-wow-delay="0s" data-wow-duration="1.7s"><a href="#">Resume</a></li>
        </ol>
      </div>
    </div>
    <div class="main-view">
      <router-view />
    </div>
    <div class="side-links">
      <div class="fadeIn left-links" v-wow data-wow-delay="1.3s" data-wow-duration="1s">
        <ul>
          <li><a href="#"><img src="./assets/githubicon.svg"></a></li>
          <li><a href="#"><img src="./assets/linked.svg"></a></li>
          <li><a href="#"><img src="./assets/facebook.svg"></a></li>
          <li><a href="#"><img src="./assets/dribbble.svg"></a></li>
        </ul>

      </div>
      <div class="fadeIn right-links" v-wow data-wow-delay="1.4s" data-wow-duration="1s">
        <ul>
          <li><a href="mailto:jovelinecamus@gmail.com">jovelinecamus@gmail.com</a> </li>
        </ul>
      </div>
   </div>
    <div class="footer">
      <p>Website built by Ralp Dexter Bongato <svg aria-label="stars" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> 2020</p>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      prevScrollpos:window.pageYOffset,
      menuHidden:false,
      hideMenuShadow:true,
      mobileNavIsActive:false,
    }
  },
  methods: {
    scroll () {
      window.onscroll = () => {
        // let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
      var currentScrollPos = window.pageYOffset;
       if (currentScrollPos < 85)
       {
         this.menuHidden = false;
         this.hideMenuShadow = true;
         this.prevScrollpos = window.pageYOffset;
       }
       else if(this.prevScrollpos > currentScrollPos)
       {
         this.menuHidden = false;
         this.prevScrollpos = window.pageYOffset;
         this.hideMenuShadow = false;
       }else
       {
         this.menuHidden = true;
         this.prevScrollpos = window.pageYOffset;
       }
      }
    },
    mobilenav()
    {
      this.mobileNavIsActive = !this.mobileNavIsActive;
    }
  },
  mounted() {
    this.scroll();
  },
}
</script>
<style lang="scss">

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// Css reset end
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #8892B0;
  background: #0A192F;
  padding-top: 90px;
}
#nav {
  padding: 0px 35px;
  padding-top: 20px;
  display: flex;
  height: 70px;
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;
  background: #0A192F;
  transition: top .5s ease-in-out;
}
@media(max-width:425px)
{
  #nav
  {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.hide-menu-shadow
{
  box-shadow: none!important;
}
.hide-up-nav
{
  top:-100vh!important;
  // height: 70px;
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;
  // background: #0A192F;
}
a
{
  color: #64FFDA;
  text-decoration: none;
}
.main-view
{
  max-width: 1000px;
  margin:0 auto;
  pading: 0px 30px;
  overflow-x: hidden;
}
.head-cta a
{
  color:#64FFDA!important;
}
.head-cta
{
  list-style: none!important;
  border:1px solid #64FFDA;
  border-radius: 3px;
  position: relative;
  top:-10px;
  margin:15px 0px 0px 0px !important
}
.left-nav
{
  flex:1;
}
.left-nav
{
  flex:1;
}
.logo-top
{
  max-width: 50px;
}
.logo-top img
{
  width: 100%;
}
.right-nav ol
{
  display: flex;
  justify-content: flex-end;
  list-style: decimal-leading-zero;
  color:#64FFDA;
  font-size: 13px;
}
@media(max-width:768px)
{
  .right-nav .mobile
  {
    list-style: none;
  }
}
.right-nav ol li
{
 margin:0px 20px;
 margin-top: 8px;
}
.right-nav ol li a
{
  text-decoration: none;
  padding:12px 10px;
  color:#CCD6F6;
  font-size: 13px;
  font-family: 'Roboto Mono', monospace;
  display: block;
}
.burger-menu-container
{
  height: 40px;
  width: 40px;
  position: relative;
  display: none;
  z-index: 100;
}
@media(max-width:768px)
{
  .burger-menu-container
  {
    display: block;
  }
}
.burger-menu
{
  height: 2px;
  width: 30px;
  background: #62FBD7;
  position: absolute;
  top: 20px;
  right: 0;
  transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: 0s;
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    border-radius: 3px;
      z-index: 100;
}
.burger-menu-container.active .burger-menu
{
  transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: 0.12s;
    transform: rotate(225deg);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 3px;
    z-index: 100;
}
.burger-menu-container.active .burger-menu::after
{
  opacity: 0;
}
.burger-menu-container.active .burger-menu::before
{
  width: 30px;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out 0s, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  top: 0px;
}
.burger-menu::before
{
  content:" ";
  height: 2px;
  width: 40px;
  background: #62FBD7;
  position: absolute;
  top: -10px;
  right: 0;
}
.burger-menu::after
{
  content:" ";
  height: 2px;
  width: 20px;
  background: #62FBD7;
  position: absolute;
  bottom: -10px;
  right: 0;
  opacity: 1;
  transition: opacity .4s ease-in-out;
}
.right-nav .mobile
{
  display: none;
}
@media(max-width:768px)
{
  .right-nav .desktop
  {
    display: none;
  }
  .right-nav .mobile
  {
    background: #172A45;
    display: block;
    position: fixed;
    top: 0;
    right: -200vw;
    height: 100vh;
    width: 300px;
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    transition: right .3s ease-in-out;
  }
  .right-nav .mobile.active
  {
    right: 0!important;
  }
  .right-nav .mobile li
  {
    padding:20px 30px;
  }
  .burger-menu
  {
    display: block;
  }
}
@media(max-width:425px)
{
  .right-nav .mobile
  {
    width: 200px;
  }
}
.left-links ul li a img
{
  width: 20px;
}
.left-links ul li
{
  padding:13px;
}
.left-links
{
  position: fixed;
  left:40px;
  bottom:0;
  padding-bottom: 100px;
}
.left-links ul::after
{
  content: " ";
  background: #CCD6F6;
  width: 1px;
  height: 80px;
  left:63px;
  bottom:0;
  position: fixed;
}

.right-links ul li a
{
  font-size: 12px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  color: #CCD6F6;
  font-family: 'Roboto Mono', monospace;
  text-decoration: none;
  padding:13px 16px;
}
.right-links
{
  position: fixed;
  right:40px;
  bottom:0;
  padding-bottom: 100px;
}
.right-links ul::after
{
  content: " ";
  background: #CCD6F6;
  width: 1px;
  height: 80px;
  right:63px;
  bottom:0;
  position: fixed;
}
@media(max-width:1230px)
{
  .right-links
  {
    display: none;
  }
  .left-links
  {
    display: none;
  }
}
.footer
{
  background: #020C1B;
  min-height: 80px;
  display: flex;
}
.footer p:hover
{
  color:#64FFDA;
}
.footer p svg
{
  fill:#8892B0;
  vertical-align: middle;
  width: 14px;
  margin-bottom: 3px;
}
.footer p
{
  margin:auto;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  text-align: center;
}
@media(max-width:375px)
{
  .footer p
  {
    font-size: 11px;
  }
}
</style>
