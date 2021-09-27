<template>
  <div class="home">
    <Header />
    <div class="video-container">
      <video autoplay muted loop>
          <source src="../../assets/main.mp4" type="video/mp4" />
      </video>
      <div class="videotitle">
        <div class="videotext">Discover</div>
        <div class="videotext1">your world</div>
      </div>
    </div>
    <div class="content1bg">
      <div class="content1">
        <div class="leftcolumn">
          <div class="title">
            <div class="text1">Welcome to</div>
            <div class="text2">our world</div>
            <!-- <h3>Welcome to our world</h3> -->
          </div>
          <div>
            <p>
              <div class="para">Discover the unique atmosphere of our private </div>
              <div class="para">residential club communities. Once experienced. Never </div>
              <div class="para">forgotten. This is classic, comfortable, modern living in </div>
              <div class="para">nature’s most spectacular settings worldwide. </div>
              <div class="para">Reassuringly exclusive. Generously welcoming. Find </div>
              <div class="para">your unique world – a place where families love to be; </div>
              <div class="para">creating unforgettable moments, together. </div>
            <!-- eslint-disable-next-line vue/no-parsing-error -->
            </p>
          </div>
        </div>
        <div class="leftend">
          <img class="welcomeimg" src="https://dxaurk9yhilm4.cloudfront.net/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg">
        </div>
        <div class="rightcolumn">
          <img class="welcomeimg" src="https://dxaurk9yhilm4.cloudfront.net/images/275/Home_76fe09b415dcada4f46ba4114338562c.jpg">
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="navbar">
        <div class="titleheader">
          <div class="text1">Explore</div>
          <div class="text2">our worlds</div>
        </div>
        <nav class="navarrows">
          <button type="button" class="arrowbtn">
            <div class="prevbtn">
              <div class="locationbtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
              </div>
            </div>
          </button>
          <button type="button" class="arrowbtn">
            <div class="nextbtn">
              <div class="locationbtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
              </div>
            </div>
          </button>
        </nav>
      </div>
      <div class="slider">
        <div class="slide-track" v-for="items in bodycontent" :key="items.id">
          <div class="slide">
            <Carousel v-bind:itemlist="items"/>
          </div>
        </div>
      </div>
    </div>
    <div class="content3">
    </div>
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

