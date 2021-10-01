import "./About.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import Carouselheader from "@/components/Carouselheader/Carouselheader.vue";
import Carousel from '@/components/Carousel/Carousel.vue';
import Headertext from "@/components/Headertext/Headertext.vue";
import Background_Image from "@/components/Background_Image/Background_Image.vue";
import Textimage from "@/components/Textimage/Textimage.vue";

@Options({
  components: {
    Header,
    Carouselheader,
    Carousel,
    Headertext,
    Background_Image,
    Textimage,
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

  content1 = `<p>Founded in 1994 by Mike Meldman, Discovery Land Company is a US-based real estate developer and operator of private residential club communities and resorts with a world-renowned portfolio of domestic and international properties.</p>`

  content4text1 = "The Discovery Difference"
  content4text2 = " "

  content5url = "https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg"

  content7url = "https://dxaurk9yhilm4.cloudfront.net/images/890/YCGolfClubHouse0916_1288_62018727b9e8103a3d5d6c0701991eca.jpg"

  content6lefturl = "https://dxaurk9yhilm4.cloudfront.net/images/157/What_we_do_design_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg"
  content6title = "Discovery Design"
  content6para = `<p>See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle.</p>`
  content6righturl = "https://dxaurk9yhilm4.cloudfront.net/images/158/What_we_do_design_2_2ab4534b0a2984e07d7caeca8808129f.jpg"
  content6 = true;

  content8righturl = "https://dxaurk9yhilm4.cloudfront.net/images/155/What_we_do_builders_2_2ab4534b0a2984e07d7caeca8808129f.jpg"
  content8title = "Discovery Builders"
  content8para = `<p>Every Discovery property is wonderfully in-tune with its natural surroundings - a harmonious blend of the architecturally impressive with the environmentally sensitive. And your every expectation will be met, with our meticulous eye for detail matching outstanding levels of craftsmanship and master building.</p>`
  content8lefturl = "https://dxaurk9yhilm4.cloudfront.net/images/153/What_we_do_builders_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg"
  content8 = false;
}