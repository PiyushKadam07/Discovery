<template>
  <div class="about">
    <Header />
    
    <div class="aboutheader">
      <div class="imgbg">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/806/YC-DSC_0007-2_2cbd80a0345be3b5a0b7649a1a2d057f.jpg">
      </div>
      <div class="imgtitle">
        <div class="imgtext">Creating your</div>
        <div class="imgtext1">perfect world</div>
      </div>
    </div>
    
    <Headertext v-bind:title="content1" />
    
    <Text1image v-bind:title="content2title" :para1="content2para1" :para2="content2para2" :url="content2url" />
    
    <div class="content3">
      <img src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg">
    </div>
    
    <div class="content4">
      <Carouselheader v-bind:title1="content4text1" :title2="content4text2"/>
      <div class="slider">
        <div class="slide-track" v-for="items in bodycontent" :key="items.id">
          <div class="slide">
            <Carousel v-bind:itemlist="items"/>
          </div>
        </div>
      </div>
    </div>
    
    <Background_Image v-bind:url="content5url" />
    
    <Textimage v-bind:lefturl="content6lefturl" :righturl="content6righturl" :title="content6title" :para="content6para" :flag="content6" />
    
    <Background_Image v-bind:url="content7url" />
    
    <Textimage v-bind:lefturl="content8lefturl" :righturl="content8righturl" :title="content8title" :para="content8para" :flag="content8" />
    
    <div class="content9">
      <img src="https://dxaurk9yhilm4.cloudfront.net/images/160/What_we_do_footer_2_5dabbd1a34149dcaed83515ff1526a0f.jpg">
      <div class="imgtext">
        <span class="text">Our Worlds</span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script type="module" src="./About.ts"></script>