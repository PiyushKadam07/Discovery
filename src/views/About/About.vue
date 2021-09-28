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
    <div class="content1">
      <p>Founded in 1994 by Mike Meldman, Discovery Land Company is a <br> US-based real estate developer and operator of private residential <br> club communities and resorts with a world-renowned portfolio of <br> domestic and international properties.</p>
    </div>
    <div class="content2">
      <div class="leftcolumn">
        <div class="left_title">
          <span class="title">Our Mission</span>
        </div>
        <div class="left_txt">
          <p>We don’t build buildings, but rather we build settings <br> where families can create intergenerational memories <br> and enrich their lives in exquisite and untouched <br> sanctuaries. Everything we do is driven by the <br> fundamental desire to create spaces where families can <br> be together.</p>
          <p>These settings offer a relaxed and comfortable sense of <br> community featuring outstanding clubhouses, <br> incredible residential offerings, premier golf courses, <br> welcoming staff, world-class culinary offerings and our <br> custom Outdoor Pursuits program; all offering the <br> highest of service standards to enrich your experience. </p>
        </div>
      </div>
      <div class="rightcolumn">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/163/What_we_do_intro_5ae402c9837860cd6e4f65e304b3a5fa.jpg">
      </div>
    </div>
    <div class="content3">
      <img src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg">
    </div>
    <div class="content4">
      <div class="navbar">
        <div class="titleheader">
          <div class="text1">The Discovery Difference</div>
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
    <div class="content5">
      <img src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg">
    </div>
    <div class="content6">
      <div class="leftcolumn">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/157/What_we_do_design_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg">
      </div>
      <div class="rightcolumn">
        <div class="right_top">
          <div class="title">Discovery Design</div>
          <p>See the beauty in every corner of your new, bespoke <br> home away from home. From fabrics and furniture <br> pieces to floorplans, our professional designers will <br> collaborate closely with you to create an interior living <br> space which reflects your style and unique tastes as <br> well as perfectly complementing your lifestyle.</p>
        </div>
        <div class="right_bottom">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/158/What_we_do_design_2_2ab4534b0a2984e07d7caeca8808129f.jpg">
        </div>
      </div>
    </div>
    <div class="content7">
      <img src="https://dxaurk9yhilm4.cloudfront.net/images/890/YCGolfClubHouse0916_1288_62018727b9e8103a3d5d6c0701991eca.jpg">
    </div>
    <div class="content8">
      <div class="leftcolumn">
        <div class="left_top">
          <div class="title">Discovery Builders</div>
          <p>Every Discovery property is wonderfully in-tune with its <br> natural surroundings - a harmonious blend of the <br> architecturally impressive with the environmentally <br> sensitive. And your every expectation will be met, with <br> our meticulous eye for detail matching outstanding <br> levels of craftsmanship and master building.</p>
        </div>
        <div class="left_bottom">
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/155/What_we_do_builders_2_2ab4534b0a2984e07d7caeca8808129f.jpg">
        </div>
      </div>
      <div class="rightcolumn">
        <img src="https://dxaurk9yhilm4.cloudfront.net/images/153/What_we_do_builders_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg">
      </div>
    </div>
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