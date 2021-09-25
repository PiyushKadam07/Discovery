<template>
  <div class="home">
    <Header />
    <div class="video-container">
      <video autoplay muted loop>
          <source src="../assets/main.mp4" type="video/mp4" />
      </video>
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
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src
import Homepage from '@/components/Homepage.vue'; // @ is an alias to /src
import Carousel from '@/components/Carousel.vue';

@Options({
  components: {
    Header,
    Homepage,
    Carousel,
    Footer
  },
})

export default class Home extends Vue {
  bodycontent = [
        {
          id : 1,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/8812/DJI_0265_RET_2_210405_212842_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "NORTH SHORE PRESERVE",
          desc2: "Kaua'i, Hawaii",
        },
        {
          id : 2,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6965/DJI_0374-copy-2_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "JAMES ISLAND",
          desc2: "Southern Gulf Islands, British Columbia, Canada",
        },
        {
          id : 3,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "COSTATERRA",
          desc2: "Comporta, Portugal",
        },
        {
          id : 4,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6473/LM-Coco-Point-Barbuda-0920_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "BARBUDA OCEAN CLUB",
          desc2: "Barbuda, West Indies",
        },
        {
          id : 5,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/352/driftwood3-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "DRIFTWOOD",
          desc2: "Austin, Texas",
        },
        {
          id : 6,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/702/Troubadour_carousel6_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "TROUBADOR",
          desc2: "Nashville, Tennessee",
        },
        {
          id : 7,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/350/playa4-carousel_bab59bdddd9759d14006fbf9d95d20c9.jpg",
          desc1: "PLAYA GRANDE",
          desc2: "Rio San Juan, Dominican Republic",
        },
        {
          id : 8,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/569/chileno_landscape_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "CHILENO BAY",
          desc2: "Cabo San Lucas, Mexico",
        },
        {
          id : 9,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/692/Summit7_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "THE SUMMIT",
          desc2: "Las Vegas, Nevada",
        },
        {
          id : 10,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/354/dunedeck-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "DUNE DECK",
          desc2: "Westhampton Beach, NY",
        },
        {
          id : 11,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6658/Silo_Andy-Carlson_golf_October-2019_DJI_0024-copysmall_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "SILO RIDGE",
          desc2: "Amenia, New York",
        },
        {
          id : 12,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6804/Makena_Andy-Carlson_Golf_Feb-2020_DSC00823-copy-1_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "MAKENA",
          desc2: "Maui, Hawaii",
        },
        {
          id : 13,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/707/Yellowstone_Landscape4_eff4ef23bf5acfdbab3168ee9e1fb069.jpg",
          desc1: "YELLOWSTONE CLUB",
          desc2: "Big Sky, Montana",
        },
        {
          id : 14,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/733/GOZZER_HEROcopy_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "GOZZER RANCH",
          desc2: "Coeur d'Alene, Idaho",
        },
        {
          id : 15,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/485/eld3-carousel_190708_150708_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "EL DORADO",
          desc2: "Los Cabos, Mexico",
        },
        {
          id : 16,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/252/Maddison-carousel2_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "MADISON",
          desc2: "La Quinta, California",
        },
        {
          id : 17,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/291/Bakers-hero_c7e067ed03eb23b2d1e6333b4c154b30.jpg",
          desc1: "BAKER'S BAY",
          desc2: "Great Guana Cay, Bahamas",
        },
        {
          id : 18,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/366/hidwaway-carousel_33673e98fbdc931fea174e355972d2a5.jpg",
          desc1: "HIDEAWAY",
          desc2: "La Quinta, California",
        },
        {
          id : 19,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/361/mountaintop4-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "MOUNTAINTOP",
          desc2: "Cashiers, North Carolina",
        },
        {
          id : 20,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/630/Mirabel-carousel1_d169f13de117664acdaa1543841b7c16.jpeg",
          desc1: "MIRABEL",
          desc2: "Scottsdale, Arizona",
        },
        {
          id : 21,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/480/Kukio-OurWorlds_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "KUKI'O",
          desc2: "Kohala, Hawaii",
        },
        {
          id : 22,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/359/vaquero-carousel_190704_093940_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "VAQUERO",
          desc2: "Westlake, Texas",
        },
        {
          id : 23,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/261/ironhouse-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "IRON HORSE",
          desc2: "Whitefish, Montana",
        },
        {
          id : 24,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/262/cordevalle2-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "CORDEVALLE",
          desc2: "Silicon Valley, California",
        },
        {
          id : 25,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/7325/Estancia_sized_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "ESTANCIA",
          desc2: "Scottsdale, Arizona",
        },
    ]
}
</script>

<style scoped lang="scss">

video {
  width: 100%;
  height: 100%;
}

.content1bg {
  background-image: url("https://dxaurk9yhilm4.cloudfront.net/images/287/background_imagev2_3580431e48aedf97dcedf972d1481942.jpg");
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}

.title {
  margin-bottom: 2rem;
  line-height: 1.1;
  transform-origin: left;
}

.text1 {
  opacity: 1; 
  transform: translate(0px, 2.36px);
  text-align: left;
  font-size: 40px;
  font-family: "Average", serif;
  font-weight: lighter;
}

.text2 {
  opacity: 1; 
  transform: translate(0px, -2.12px);
  text-align: left;
  font-size: 38px;
  font-family: gotham;
  font-weight: lighter;
  letter-spacing: 2px;
}

.content1 {
  width: 75%;
  margin: 0 auto;
  height: 100%;
  grid-gap: 105px;
  padding: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "content img1"
    "img2    img1";
}

.para {
  display: block; 
  text-align: start; 
  position: relative; 
  opacity: 1; 
  transform: translate(0px, 0px);
  font-size: 14px;
  font-family: messina-sans;
  color: #777;
  line-height: 2;
  letter-spacing: 1px;
}

.leftcolumn {
  grid-area: content;
  padding: 10px;
}

.leftend {
  width: 370px;
  grid-area: img2;
  padding: 10px;
}

.rightcolumn {
  width: 400px;
  grid-area: img1;
  padding: 10px;
}

.welcomeimg {
  width: 100%;
}

.content2 {
  width: 100%;
  height: 100%;
}

.navbar {
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  height: 180px;
}

// .titleheader {
//   height: 180px;
// }

.navarrows {
  display: flex;
  height: 100px;
  align-items: center;
  // position: relative;
  // z-index: 5;
}

.arrowbtn {
  --s: 4rem;
  // position: relative;
  width: var(--s);
  height: var(--s);
  border-radius: 50%;
  background-color: #fff;
  transition: background-color .75s cubic-bezier(.19,1,.22,1);
  // z-index: 3;
  border: none;
  outline: none;
  box-shadow: 2px 1px 2px 1px lightgrey;
}


.arrowbtn:first-child {
    margin-right: 1.5rem;
}

.locationbtn {
    // position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.locationbtn svg {
    width: 1.35rem;
    height: auto;
    transition: fill .75s cubic-bezier(.19,1,.22,1);
}

.prevbtn {
    // position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    pointer-events: none;
}

.nextbtn {
    transform: scaleX(-1);
}

@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}

// Styling
.slider {
	overflow:hidden;
  display: flex;
	width: 100%;
  
  &::before,
	&::after {
		@include white-gradient;
		content: "";
  }
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
  }

	&::before {
		left: 0;
		top: 0;
  }
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		width: 60%;
  }
	
	.slide {
		display: flex;
    flex-direction: row;
  }
}

</style>
