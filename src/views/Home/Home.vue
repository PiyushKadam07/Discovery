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
          <img class="welcomeimg1" src="https://dxaurk9yhilm4.cloudfront.net/images/275/Home_76fe09b415dcada4f46ba4114338562c.jpg">
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
      <div class="lands">
        <div class="header">
          <span class="title1">Lands of </span>
          <span class="title2">Discovery</span>
          <div class="desc">
            <p> A world away from the day-to-day. Your escape. Your haven. Your world. <br> Explore the map below and take a journey to our communities. </p>
          </div>
        </div>
        <div class="landsbg">
          <img src="https://discoverylandco.com/static/globe-usa.jpg">
        </div>
        <div class="landsdesc">
          <div class="column">
            <div class="leftcolumn">
              <div class="directions">
                <button @click="leftmeth(this.selectedValue.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M68.155,45.0425c-0.7525,0.13438 -1.42437,0.51063 -1.935,1.075l-37.5175,37.41l-2.365,2.4725l2.365,2.4725l37.5175,37.41c0.83313,1.02125 2.16344,1.49156 3.45344,1.19594c1.27656,-0.29562 2.28438,-1.30344 2.58,-2.58c0.29563,-1.29 -0.17469,-2.62031 -1.19594,-3.45344l-31.605,-31.605h101.5875c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-101.5875l31.605,-31.605c1.11531,-1.03469 1.41094,-2.67406 0.73906,-4.03125c-0.65844,-1.37062 -2.15,-2.12312 -3.64156,-1.88125z"></path></g></g></svg>
                </button>
                <button @click="rightmeth(this.selectedValue.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M102.6625,45.0425c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l31.605,31.605h-101.5875c-0.1075,0 -0.215,0 -0.3225,0c-1.89469,0.09406 -3.37281,1.70656 -3.27875,3.60125c0.09406,1.89469 1.70656,3.37281 3.60125,3.27875h101.5875l-31.605,31.605c-1.02125,0.83313 -1.49156,2.16344 -1.19594,3.45344c0.29562,1.27656 1.30344,2.28438 2.58,2.58c1.29,0.29563 2.62031,-0.17469 3.45344,-1.19594l37.5175,-37.41l2.365,-2.4725l-2.365,-2.4725l-37.5175,-37.41c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075c-0.1075,0 -0.215,0 -0.3225,0z"></path></g></g></svg>
                </button>
              </div>
              <div class="weather_details">
                <div class="weather1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-brightness-low" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
                  </svg>
                  <p> {{ this.selectedValue.weather }} </p>
                </div>
                <div class="weather2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-wind" viewBox="0 0 16 16">
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <p> {{ this.selectedValue.wind_speed }} </p>
                </div>
                <div class="weather3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-compass" viewBox="0 0 16 16">
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                  </svg>
                  <p> {{ this.selectedValue.wind_dir }} </p>
                </div>
              </div>
              <div class="desc">
                <div class="desc1">
                  <p class="details1"> {{ this.selectedValue.desc2 }} </p>
                  <p class="details2"> {{ this.selectedValue.desc1 }} </p>
                </div>
                <div class="desc2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  <p class="details1"> {{ this.selectedValue.coordinates }} </p>
                </div>
              </div>
            </div>
            <div class="rightcolumn">
              <img :src="this.selectedValue.image">
            </div>
          </div>
        </div>
      </div>
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