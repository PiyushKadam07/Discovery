import "./About.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import Carousel from '@/components/Carousel/Carousel.vue';

@Options({
  components: {
    Header,
    Carousel,
    Footer
  },
})

export default class About extends Vue {
  bodycontent = [
        {
          id : 1,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6244/What_we_do_footer_carousel1_190805_141752_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          desc1: "Focus on family",
          desc2: "Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.",
        },
        {
          id : 2,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/170/What_we_do_footer_carousel2_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          desc1: "Incomparable experiences",
          desc2: "World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.",
        },
        {
          id : 3,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/529/Kukio-map1_190710_083646_397186feb8bd51bb37bc24fc2b9b500f.JPG",
          desc1: "Inspired by land",
          desc2: "Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.",
        },
        {
          id : 4,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/191/grass_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          desc1: "Sustainable future",
          desc2: "Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.",
        },
        {
          id : 5,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/558/GallatinFork0217_Bedroom02_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          desc1: "Luxury bespoke homes",
          desc2: "Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.",
        }
    ]
}