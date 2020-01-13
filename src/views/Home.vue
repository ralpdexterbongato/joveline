<template>
  <div class="home">
   <div class="intro-section">
     <p class="wow fadeInUp intro" v-wow data-wow-delay=".7s" data-wow-duration=".4s">Hi, my name is</p>
     <h1 class="wow fadeInUp" v-wow data-wow-delay=".8s" data-wow-duration=".4s">Joveline Camus.</h1>
     <h2 class="wow fadeInUp" v-wow data-wow-delay=".9s" data-wow-duration=".4s">I design things for the web.</h2>
     <p class="wow fadeInUp long-intro" v-wow data-wow-delay="1s" data-wow-duration=".4s">I'm a graphic designer based in Philippines, specializing in designing exceptional, high-quality images for the internet.</p>
     <a class="wow fadeInUp normal-cta" v-wow data-wow-delay="1.1s" data-wow-duration=".4s"  href="mailto:jovelinecamus@gmail.com">Get In Touch</a>
   </div>
   <div class="section-spacer">
     <!-- blank -->
   </div>
   <section class="about-me-section" id="about">
    <div class="wow fadeIn section-title" v-wow data-wow-delay=".5s" data-wow-duration=".4s">
      <h2>About Me</h2>
    </div>
    <div class="about-content-container">
      <div class="wow fadeIn about-content" v-wow data-wow-delay=".7s" data-wow-duration=".4s">
        <p>Hello! I'm Joveline, a Graphic Designer based in Philippines, who enjoys designing things that live on the internet. Art is already my passion since I was young and I decided to pursue my passion through freelancing.</p>
        <p>I have won multiple awards at our school <a href="#">Davao University</a> and represented our school for multiple occasions.</p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Lightroom</li>
          <li>WordPress</li>
          <li>Adobe XD</li>
          <li>Sony Vegas Pro</li>
          <li>Canva</li>
        </ul>
      </div>
      <div class="wow fadeIn about-picture" v-wow data-wow-delay=".8s" data-wow-duration=".4s">
          <div class="ab-img-container">
            <div class="img-border-shadow">
            </div>
            <img src="../assets/profile.jpg" alt="">
            <div class="img-color-cover">
            </div>
          </div>
      </div>
    </div>
  </section>
    <div class="section-spacer">
      <!-- blank -->
    </div>
    <section class="skills-section" id="works">
      <div class="wow fadeIn section-title" v-wow data-wow-delay=".5s" data-wow-duration=".4s">
        <h2>What I can do</h2>
      </div>
      <div class="wow fadeIn featured-skillbox featured-skill-design-one" v-wow data-wow-delay=".7s" data-wow-duration=".4s">
        <div class="featured-left">
          <div class="featured-img-container">
            <img src="../assets/big-art1.jpg" alt="">
            <div class="featured-img-cover">
            </div>
          </div>
        </div>
        <div class="featured-right">
          <p class="short-feature-title">Featured skill</p>
          <h3>Illustrations</h3>
          <p class="long-feature-title">I can design flat llustations for you website, flat design helps to focus more on the content, without distracting the viewers from the visual effects.</p>
          <ul class="hashtags">
            <li>#flatdesign</li>
            <li>#svg</li>
            <li>#websiteillustration</li>
            <li>#simple-art</li>
          </ul>
        </div>
      </div>

      <div class="wow fadeIn featured-skillbox featured-skill-design-two" v-wow data-wow-delay=".7s" data-wow-duration=".4s">
        <div class="featured-left">
          <p class="short-feature-title">Featured skill</p>
          <h3>Logo Design</h3>
          <p class="long-feature-title">I can design easy on the eye logo that is perfect for your business, a logo is one of the most important branding investments a business can make.</p>
          <ul class="hashtags">
            <li>#vectorgraphics</li>
            <li>#logo</li>
            <li>#businesslogo</li>
            <li>#icons</li>
          </ul>
        </div>
        <div class="featured-right">
          <div class="featured-img-container">
            <img src="../assets/big-art1.jpg" alt="">
            <div class="featured-img-cover">
            </div>
          </div>
        </div>
      </div>

      <div class="wow fadeIn featured-skillbox featured-skill-design-one" v-wow data-wow-delay=".7s" data-wow-duration=".4s">
        <div class="featured-left">
          <div class="featured-img-container">
            <img src="../assets/big-art1.jpg" alt="">
            <div class="featured-img-cover">
            </div>
          </div>
        </div>
        <div class="featured-right">
          <p class="short-feature-title">Featured skill</p>
          <h3>Photo Editing</h3>
          <p class="long-feature-title">I can edit and improve your product images, consumers cannot touch or feel your products online but it's the images that decide if he/she will buy the product.</p>
          <ul class="hashtags">
            <li>#improve</li>
            <li>#photoshop</li>
            <li>#products</li>
            <li>#advertisement</li>
          </ul>
        </div>
      </div>
      <div class="section-spacer">
        <!-- blank -->
      </div>
      <div class="wow fadeIn sample-works" v-wow data-wow-delay=".2s" data-wow-duration=".4s">
        <h2>My Other Designs</h2>
        <p>30+ designs</p>
      </div>
      <div class="design-boxes-container">
        <div class="wow fadeIn design-box" v-wow data-wow-delay="0s" data-wow-duration="1s">
          <div class="design-box-img">
            <img src="../assets/art1.jpg" alt="">
            <div class="design-box-img-cover">
            </div>
          </div>
        </div>
        <div class="wow fadeIn design-box" v-wow data-wow-delay=".4s" data-wow-duration="1s">
          <div class="design-box-img">
            <img src="../assets/art2.jpg" alt="">
            <div class="design-box-img-cover">
            </div>
          </div>
        </div>
        <div class="wow fadeIn design-box" v-wow data-wow-delay=".8s" data-wow-duration="1s">
          <div class="design-box-img">
            <img src="../assets/art3.jpg" alt="">
            <div class="design-box-img-cover">
            </div>
          </div>
        </div>
        <div class="wow fadeIn design-box" v-wow data-wow-delay="1.2s" data-wow-duration="1s">
          <div class="design-box-img">
            <img src="../assets/art4.jpg" alt="">
            <div class="design-box-img-cover">
            </div>
          </div>
        </div>
        <div class="wow fadeIn design-box" v-wow data-wow-delay="1.6s" data-wow-duration="1s">
          <div class="design-box-img">
            <img src="../assets/art5.jpg" alt="">
            <div class="design-box-img-cover">
            </div>
          </div>
        </div>
        <div class="wow fadeIn design-box" v-wow data-wow-delay="2s" data-wow-duration="1s">
          <div class="design-box-img">
            <img src="../assets/art7.jpg" alt="">
            <div class="design-box-img-cover">
            </div>
          </div>
        </div>
        <span class="more-design-box" v-if="isToggled">
          <div class="wow fadeIn design-box" v-wow data-wow-delay="0s" data-wow-duration="1s">
            <div class="design-box-img">
              <img src="../assets/art6.jpg" alt="">
              <div class="design-box-img-cover">
              </div>
            </div>
          </div>
          <div class="wow fadeIn design-box" v-wow data-wow-delay=".4s" data-wow-duration="1s">
            <div class="design-box-img">
              <img src="../assets/art8.jpg" alt="">
              <div class="design-box-img-cover">
              </div>
            </div>
          </div>
          <div class="wow fadeIn design-box" v-wow data-wow-delay=".8s" data-wow-duration="1s">
            <div class="design-box-img">
              <img src="../assets/art1.jpg" alt="">
              <div class="design-box-img-cover">
              </div>
            </div>
          </div>
          <div class="wow fadeIn design-box" v-wow data-wow-delay="1.2s" data-wow-duration="1s">
            <div class="design-box-img">
              <img src="../assets/art4.jpg" alt="">
              <div class="design-box-img-cover">
              </div>
            </div>
          </div>
          <div class="wow fadeIn design-box" v-wow data-wow-delay="1.6s" data-wow-duration="1s">
            <div class="design-box-img">
              <img src="../assets/art5.jpg" alt="">
              <div class="design-box-img-cover">
              </div>
            </div>
          </div>
          <div class="wow fadeIn design-box" v-wow data-wow-delay="2s" data-wow-duration="1s">
            <div class="design-box-img">
              <img src="../assets/art1.jpg" alt="">
              <div class="design-box-img-cover">
              </div>
            </div>
          </div>
        </span>
        <div class="more-designs-cta" v-on:click.prevent="isToggled=!isToggled">
          <a class="normal-cta" v-if="!isToggled" href="#">Show More</a>
          <a class="normal-cta" v-if="isToggled" href="#">Show Less</a>
        </div>
      </div>
    </section>
    <div class="section-spacer">
      <!-- blank -->
    </div>
    <section class="contact-section" id="contact">
      <div class="centered-section section-title">
        <h2>What's Next?</h2>
      </div>
      <h1>Get In Touch</h1>
      <p>I'm currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
      <div class="contact-cta">
        <a href="mailto:jovelinecamus@gmail.com" class="normal-cta">Say hello</a>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      isToggled: false,
    }
  },
}
</script>

<style lang="scss">

.home
{
  min-height: 100vh;
  padding-bottom: 200px;
  counter-reset: section;
}
@media(max-width:768px)
{
 .home
 {
     padding: 0px 50px;
 }
}
@media(max-width:425px)
{
 .home
 {
     padding: 0px 25px;
 }
}
.home section
{
  padding-top: 40px;
}

.intro-section .intro
{
  font-size: 14px;
  color:#64FFDA;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 20px;
}
.intro-section h1
{
  color: #CCD6F6;
  font-size: 63px;
  font-weight: bold;
  line-height: 80px;
  font-family: 'Archivo Black', sans-serif;
}
.intro-section h2
{
  color: #8892B0;
  line-height: 80px;
  font-size: 63px;
  font-weight: bold;
  font-family: 'Archivo Black', sans-serif;
}
.intro-section
{
  margin-top: 60px;
}
.long-intro
{
  margin-top: 30px;
  max-width: 500px;
  font-size: 17px;
  line-height: 25px;
  color: #8892B0;
  margin-bottom: 75px;
}
@media(max-width:768px)
{
   .long-intro
   {
     margin-top: 20px;
     margin-bottom: 55px;
   }
   .intro-section .intro
   {
     margin-bottom: 10px;
   }
   .intro-section h1
   {
     font-size: 47px;
     line-height: 60px;
   }
   .intro-section h2
   {
     font-size: 47px;
     line-height: 60px;
   }
}
@media(max-width:425px)
{
  .intro-section .intro
  {
    font-size: 12px;
  }
  .intro-section h1
  {
    font-size: 37px;
    line-height: 50px;
  }
  .intro-section h2
  {
    font-size: 37px;
    line-height: 50px;
  }
  .long-intro
  {
    font-size: 15px;
    margin-top: 30px;
  }
}
@media(max-width:375px)
{
  .intro-section h1
  {
    font-size: 33px;
    line-height: 45px;
  }
  .intro-section h2
  {
    font-size: 33px;
    line-height: 45px;
  }
}
@media(max-width:325px)
{
  .intro-section h1
  {
    font-size: 30px;
    line-height: 40px;
  }
  .intro-section h2
  {
    font-size: 30px;
    line-height: 40px;
  }
}
.normal-cta:hover
{
  background: rgba(100,255,218,0.1);
}
.normal-cta
{
  padding:15px 25px;
  border:1px solid #64FFDA;
  border-radius: 3px;
  color:#64FFDA;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 15px!important;
  margin-top: 50px;
}
.section-spacer
{
  padding: 150px 0px;
}
@media(max-width:425px)
{
  .section-spacer
  {
    padding:100px 0px;
  }
}
@media(max-width:375px)
{
  .section-spacer
  {
    padding:60px 0px;
  }
}
.section-title h2
{
  color: #CCD6F6;
  font-size: 27px;
  font-weight: 600;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  margin: 10px 0px 40px 0px;
}
.section-title h2::after
{
  content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color: rgb(45, 57, 82);
    position: relative;
    top: 0px;
    right:0px;
    margin-left: 20px;
}
.centered-section.section-title h2::after
{
  display: none!important;
}
.section-title h2::before
{
  counter-increment: section 1;
  content: "0" counter(section) ".";
  margin-right: 15px;
  color: #64FFDA;
  font-family: 'Roboto Mono', monospace;
  font-size: 17px;
  font-weight: 300;
}
.centered-section.section-title h2
{
  font-size: 16px;
  color: #64FFDA;
  font-weight: 400;
  font-family: 'Roboto Mono', monospace;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  display: block;
  text-align: center;
  margin: 10px 0px 30px 0px;
}
.about-content-container
{
  display: flex;
}
.about-content
{
  max-width: 500px;
  flex:1;
  line-height: 27px;
  font-size: 17px;
}
@media(max-width:768px)
{
  .about-content-container
  {
    flex-direction: column;
  }
}
@media(max-width:425px)
{
   .centered-section.section-title h2
   {
     font-size: 14px;
   }
   .section-title h2::before
   {
     font-size: 14px;
   }
   .about-content
   {
     font-size: 15px;
     line-height: 26px;
   }
}

.about-content ul li::before
{
  content: "▹";
  margin-right:10px;
  color:#64FFDA;
  font-size: 17px;
}
.about-content ul
{
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style:none;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
}
.about-content p
{
  margin-bottom: 20px;
}

.about-picture
{
  flex:1;
}
.ab-img-container:hover .img-border-shadow
{
  bottom:-20px;
  right: -20px;
}
.ab-img-container
{
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border-radius: 3px;
  position: relative;
}
@media(max-width:768px)
{
  .ab-img-container
  {
    margin-top: 50px;
  }
}
@media(max-width:325px)
{
  .ab-img-container
  {
    width: 160px;
    height: 160px;
  }
}
.img-border-shadow
{
  position: absolute;
  border:2px solid #64FFDA;
  border-radius: 3px;
  height: 100%;
  width: 100%;
  bottom:-30px;
  right: -30px;
  transition: all .2s ease;
}
.ab-img-container img
{
  border-radius: 3px;
  width: 100%;
  position: absolute;
}
.ab-img-container:hover .img-color-cover
{
  opacity: 0;
}
.img-color-cover
{
  opacity: 1;
  -webkit-transition: opacity .2s ease-in-out;
  -moz-transition: opacity .2s ease-in-out;
  -ms-transition: opacity .2s ease-in-out;
  -o-transition: opacity .2s ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 193, 146,0.5);
  top:0;
  left: 0;
  border-radius: 3px;
}

.contact-section
{
  max-width: 600px;
  margin:0 auto;
  margin-bottom: 40px;
}
.contact-section h1
{
  color: #CCD6F6;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  font-family: 'Archivo Black', sans-serif;
  margin-bottom: 30px;
}
.contact-section p
{
  line-height: 30px;
  font-size: 17px;
  text-align: center;
  margin-bottom: 60px;
}
@media(max-width:768px)
{
  .contact-section
  {
    margin-bottom: 100px;
  }
}
@media(max-width:425px)
{
  .contact-section h1
  {
    font-size: 36px;
  }
  .contact-section p
  {
    font-size: 15px;
    line-height: 25px;
  }
}

.contact-section a
{
  margin:0 auto;
}
.contact-cta
{
  display: block;
  text-align: center;
}
.featured-skill-design-one
{
  display: flex;
}
.featured-skill-design-one .featured-img-container img
{
  width: 100%;
  border-radius: 3px;
}
.featured-skill-design-one .featured-img-container
{
  width: 100%;
  position: relative;
}
.featured-skill-design-one .featured-left
{
  flex:1;
  position: relative;
  margin-right: -70px;
}
.featured-skill-design-one .featured-right
{
  flex:1;
}
@media(max-width:425px)
{
  .featured-skill-design-one .featured-img-container
  {
    margin-top: 10px;
  }
  .featured-skill-design-one .featured-left
  {
    display: none;
  }
  .featured-skill-design-one .featured-right
  {
    box-sizing: border-box;
    overflow: hidden;
  }
}

.featured-skill-design-one .short-feature-title
{
  text-align: right;
  font-size: 14px;
  color: #5EF0CF;
  font-family: 'Roboto Mono', monospace;
  margin:13px 0px;
}
.featured-skill-design-one h3
{
  font-size: 26px;
  text-align: right;
  font-weight: bold;
  color: #CCD6F6;
}
.featured-skill-design-one .long-feature-title
{
  font-size: 15px;
  color: #CCD6F6;
  text-align: right;
  padding:30px 25px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #172A45;
  border-radius: 3px;
  line-height: 22px;
  position: relative;
}
.featured-skill-design-one .featured-img-cover
{
  position: absolute;
  width: 100%;
  height: 99%;
  background: rgba(13, 136, 108,0.8);
  top: 0;
  bottom:0;
  border-radius: 3px;
  left: 0;
  opacity: 1;
  -webkit-transition: opacity .2s ease-in-out;
  -moz-transition: opacity .2s ease-in-out;
  -ms-transition: opacity .2s ease-in-out;
  -o-transition: opacity .2s ease-in-out;
}
.featured-skill-design-one .featured-left:hover .featured-img-cover
{
  opacity: 0;
}
.featured-skill-design-one .hashtags
{
  display: flex;
  justify-content: flex-end;
}
.featured-skill-design-one .hashtags li
{
  margin-left: 20px;
}
@media(max-width:425px)
{
  .featured-skill-design-one .hashtags li
  {
    font-size: 10px;
  }
  .featured-skill-design-two .hashtags li
  {
    font-size: 10px;
  }
}
.featured-skillbox
{
  margin-bottom: 100px;
}

// design 2
.featured-skill-design-two
{
  display: flex;
}
.featured-skill-design-two .featured-img-container img
{
  width: 100%;
  border-radius: 3px;
}
.featured-skill-design-two .featured-img-container
{
  width: 100%;
  position: relative;
}
.featured-skill-design-two .featured-right
{
  flex:1;
}
.featured-skill-design-two .featured-left
{
  flex:1;
  position: relative;
}
@media(max-width:425px)
{
  .featured-skill-design-two .featured-img-container
  {
    margin-top: 10px;
  }
  .featured-skill-design-two .featured-right
  {
    display: none;
  }
  .featured-skill-design-two .featured-left
  {
    margin-right: 0px;
    box-sizing: border-box;
    overflow: hidden;
  }
}


.featured-skill-design-two .short-feature-title
{
  text-align: left;
  font-size: 14px;
  color: #5EF0CF;
  font-family: 'Roboto Mono', monospace;
  margin:13px 0px;
}
.featured-skill-design-two h3
{
  font-size: 26px;
  text-align: left;
  font-weight: bold;
  color: #CCD6F6;
}
.featured-skill-design-two .long-feature-title
{
  z-index: 2;
  font-size: 15px;
  color: #CCD6F6;
  text-align: left;
  padding:30px 25px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #172A45;
  border-radius: 3px;
  line-height: 22px;
  position: relative;
}
.long-feature-title
{
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  -webkit-transition: box-shadow .2s ease-in-out;
  -moz-transition: box-shadow .2s ease-in-out;
  -ms-transition: box-shadow .2s ease-in-out;
  -o-transition: box-shadow .2s ease-in-out;
}
.long-feature-title:hover
{
  box-shadow: rgba(2, 12, 27, 0.7) 0px 20px 30px -15px;
}
.featured-skill-design-two .featured-right
{
  margin-left: -70px;
}
.featured-skill-design-two .featured-img-cover
{
  position: absolute;
  width: 100%;
  height: 99%;
  background: rgba(13, 136, 108,0.8);
  top: 0;
  border-radius: 3px;
  left: 0;
  opacity: 1;
  -webkit-transition: opacity .2s ease-in-out;
  -moz-transition: opacity .2s ease-in-out;
  -ms-transition: opacity .2s ease-in-out;
  -o-transition: opacity .2s ease-in-out;
}
.featured-skill-design-two .featured-right:hover .featured-img-cover
{
  opacity: 0;
}
.featured-skill-design-two .hashtags
{
  display: flex;
  justify-content: flex-start;
}
.featured-skill-design-two .hashtags li
{
  margin-right: 20px;
}

.design-box
{
  border-radius:3px;
  background: #172A45;
  width: 322px;
  height: 222px;
  margin: 20px 0px;
}
.design-box-img
{
  width: 322px;
  height: 222px;
  border-radius: 3px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
.design-box-img-cover
{
  opacity: 1;
  box-sizing: border-box;
  position: absolute;
  bottom:0;
  left: 0;
  width: 322px;
  height: 222px;
  background:linear-gradient(rgba(26, 223, 134,.1),rgba(26, 223, 134,.7));
  transition: opacity .2s ease-in-out;
}
@media(max-width:325px)
{
  .design-box
  {
    width:250px;
  }
  .design-box-img
  {
    width:250px;
  }
  .design-box-img-cover
  {
    width: 250px;
  }
}
.design-box:hover .design-box-img-cover
{
  opacity: 0;
}
.design-box-img img
{
  width:100%;
  border-radius: 3px;
}
.design-boxes-container
{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.more-design-box
{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media(max-width:425px)
{
  .design-boxes-container
  {
    justify-content: center;
  }
  .more-design-box
  {
    justify-content: center;
  }
}
.sample-works h2
{
  font-size: 26px;
  font-weight: bold;
  color: #CCD6F6;
  text-align: center;
  margin-bottom: 20px;
}
.sample-works p
{
  color: #64EDAE;
  font-size: 15px;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
}
.more-designs-cta
{
  width: 100%;
  margin-top: 80px;
  text-align: center;
}
.more-designs-cta a
{
  margin:0 auto;
}

</style>
