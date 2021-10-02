<template>
  <div class="home">
    <Header />

    <Homevideo :text1="videotext1" :text2="videotext2"/>

    <div class="content1bg">
      <div class="content1">
        <div class="leftcolumn">
          <div class="title">
            <div class="text1">Welcome to</div>
            <div class="text2">our world</div>
          </div>
          <div>
            <p>
              <div class="para">Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgotten. This is classic, comfortable, modern living in nature’s most spectacular settings worldwide. Reassuringly exclusive. Generously welcoming. Find your unique world – a place where families love to be; creating unforgettable moments, together. </div>
            <!-- eslint-disable-next-line vue/no-parsing-error -->
            </p>
          </div>
        </div>
        <div class="leftend">
          <img class="welcomeimg" src="https://dxaurk9yhilm4.cloudfront.net/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg">
        </div>
        <div class="rightcolumn">
          <img class="welcomeimg1" src="https://dxaurk9yhilm4.cloudfront.net/images/275/Home_76fe09b415dcada4f46ba4114338562c.jpg">
        </div>
      </div>
    </div>

    <div class="content2">
      <Carouselheader v-bind:title1="content2text1" :title2="content2text2"/>
      <div class="slider">
        <div class="slide-track" v-for="items in bodycontent" :key="items.id">
          <div class="slide">
            <Carousel v-bind:itemlist="items"/>
          </div>
        </div>
      </div>
    </div>

    <LandsofDiscovery />

    <div class="content4">
      <div class="imgcontents">
        <div class="img-content4"> 
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_e36797c82dbcb9dea0800f713424f022.jpg">
          <div class="imgtext"> Experiences </div>
        </div>
        <div class="img-content4">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_fc98236fcd7afd38ca0fd181cf61bcb6.jpg">
          <div class="imgtext"> Lifestyle </div>
        </div>
        <div class="img-content4">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/730/wellness_slider_190716_095551_90f8ce634cc6ad7a15d605007f03ee5c.jpg">
          <div class="imgtext"> Wellness </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script type="module" src="./Home.ts"></script>