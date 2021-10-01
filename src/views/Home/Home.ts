import "./Home.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import Homevideo from '@/components/Homevideo/Homevideo.vue'; // @ is an alias to /src
import Carousel from '@/components/Carousel/Carousel.vue';
import LandsofDiscovery from '@/components/LandsofDiscovery/LandsofDiscovery.vue';

@Options({
  components: {
    Header,
    Homevideo,
    Carousel,
    LandsofDiscovery,
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
          coordinates: "22.193420° N / -159.361620° W",
          weather: "71 °F",
          wind_speed: "13.11 mph",
          wind_dir: "82°",
        },
        {
          id : 2,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6965/DJI_0374-copy-2_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "JAMES ISLAND",
          desc2: "Southern Gulf Islands, British Columbia, Canada",
          coordinates: "48.602830922° N / -123.342998628° W",
          weather: "52 °F",
          wind_speed: "3.00 mph",
          wind_dir: "222°",
        },
        {
          id : 3,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "COSTATERRA",
          desc2: "Comporta, Portugal",
          coordinates: "38.198750° N / -8.764298° W",
          weather: "20 °C",
          wind_speed: "15.57 mph",
          wind_dir: "333°",
        },
        {
          id : 4,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6473/LM-Coco-Point-Barbuda-0920_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "BARBUDA OCEAN CLUB",
          desc2: "Barbuda, West Indies",
          coordinates: "17.549884° N / -61.765587° W",
          weather: "86 °F",
          wind_speed: "11.30 mph",
          wind_dir: "99°",
        },
        {
          id : 5,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/352/driftwood3-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "DRIFTWOOD",
          desc2: "Austin, Texas",
          coordinates: "30.139339° N / -98.022342° W",
          weather: "77 °F",
          wind_speed: "4.00 mph",
          wind_dir: "164°",
        },
        {
          id : 6,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/702/Troubadour_carousel6_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "TROUBADOR",
          desc2: "Nashville, Tennessee",
          coordinates: "35.828904° N / -86.679158° W",
          weather: "70 °F",
          wind_speed: "6.15 mph",
          wind_dir: "233°",
        },
        {
          id : 7,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/350/playa4-carousel_bab59bdddd9759d14006fbf9d95d20c9.jpg",
          desc1: "PLAYA GRANDE",
          desc2: "Rio San Juan, Dominican Republic",
          coordinates: "19.3830° N / 70.0407° W",
          weather: "81 °F",
          wind_speed: "15.59 mph",
          wind_dir: "264°",
        },
        {
          id : 8,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/569/chileno_landscape_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "CHILENO BAY",
          desc2: "Cabo San Lucas, Mexico",
          coordinates: "22.954708° N / -109.816218° W",
          weather: "78 °F",
          wind_speed: "3.87 mph",
          wind_dir: "342°",
        },
        {
          id : 9,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/692/Summit7_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "THE SUMMIT",
          desc2: "Las Vegas, Nevada",
          coordinates: "36.1094° N / 115.3287° W",
          weather: "59 °F",
          wind_speed: "5.14 mph",
          wind_dir: "245°",
        },
        {
          id : 10,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/354/dunedeck-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "DUNE DECK",
          desc2: "Westhampton Beach, NY",
          coordinates: "40.8093799° N / -72.6458277° W",
          weather: "73 °F",
          wind_speed: "7.00 mph",
          wind_dir: "338°",
        },
        {
          id : 11,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6658/Silo_Andy-Carlson_golf_October-2019_DJI_0024-copysmall_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "SILO RIDGE",
          desc2: "Amenia, New York",
          coordinates: "41.834259° N / -73.571259° W",
          weather: "62 °F",
          wind_speed: "2.24 mph",
          wind_dir: "288°",
        },
        {
          id : 12,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/6804/Makena_Andy-Carlson_Golf_Feb-2020_DSC00823-copy-1_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "MAKENA",
          desc2: "Maui, Hawaii",
          coordinates: "20.690308° N / -156.440582° W",
          weather: "73 °F",
          wind_speed: "7.11 mph",
          wind_dir: "44°",
        },
        {
          id : 13,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/707/Yellowstone_Landscape4_eff4ef23bf5acfdbab3168ee9e1fb069.jpg",
          desc1: "YELLOWSTONE CLUB",
          desc2: "Big Sky, Montana",
          coordinates: "45.2660° N / 111.2531° W",
          weather: "44 °F",
          wind_speed: "14.50 mph",
          wind_dir: "39°",
        },
        {
          id : 14,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/733/GOZZER_HEROcopy_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "GOZZER RANCH",
          desc2: "Coeur d'Alene, Idaho",
          coordinates: "47.617997° N / -116.766169° W",
          weather: "46 °F",
          wind_speed: "1.99 mph",
          wind_dir: "208°",
        },
        {
          id : 15,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/485/eld3-carousel_190708_150708_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "EL DORADO",
          desc2: "Los Cabos, Mexico",
          coordinates: "26.047947° N / -109.799287° W",
          weather: "84 °F",
          wind_speed: "5.99 mph",
          wind_dir: "177°",
        },
        {
          id : 16,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/252/Maddison-carousel2_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "MADISON",
          desc2: "La Quinta, California",
          coordinates: "33.660962° N / -116.244456° W",
          weather: "71 °F",
          wind_speed: "6.91 mph",
          wind_dir: "340°",
        },
        {
          id : 17,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/291/Bakers-hero_c7e067ed03eb23b2d1e6333b4c154b30.jpg",
          desc1: "BAKER'S BAY",
          desc2: "Great Guana Cay, Bahamas",
          coordinates: "26.686966° N / -77.146015° W",
          weather: "79 °F",
          wind_speed: "10.25 mph",
          wind_dir: "39°",
        },
        {
          id : 18,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/366/hidwaway-carousel_33673e98fbdc931fea174e355972d2a5.jpg",
          desc1: "HIDEAWAY",
          desc2: "La Quinta, California",
          coordinates: "33.667059° N / -116.260879° W",
          weather: "70 °F",
          wind_speed: "5.01 mph",
          wind_dir: "280°",
        },
        {
          id : 19,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/361/mountaintop4-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "MOUNTAINTOP",
          desc2: "Cashiers, North Carolina",
          coordinates: "35.106704° N / -83.097106° W",
          weather: "60 °F",
          wind_speed: "2.86 mph",
          wind_dir: "326°",
        },
        {
          id : 20,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/630/Mirabel-carousel1_d169f13de117664acdaa1543841b7c16.jpeg",
          desc1: "MIRABEL",
          desc2: "Scottsdale, Arizona",
          coordinates: "33.823760° N / -111.851592° W",
          weather: "66 °F",
          wind_speed: "3.00 mph",
          wind_dir: "112°",
        },
        {
          id : 21,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/480/Kukio-OurWorlds_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "KUKI'O",
          desc2: "Kohala, Hawaii",
          coordinates: "19.817312° N / -155.998547° W",
          weather: "73 °F",
          wind_speed: "3.44 mph",
          wind_dir: "310°",
        },
        {
          id : 22,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/359/vaquero-carousel_190704_093940_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "VAQUERO",
          desc2: "Westlake, Texas",
          coordinates: "32.965190° N / -97.194715° W",
          weather: "75 °F",
          wind_speed: "3.00 mph",
          wind_dir: "169°",
        },
        {
          id : 23,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/261/ironhouse-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "IRON HORSE",
          desc2: "Whitefish, Montana",
          coordinates: "48.449344° N / -114.347434° W",
          weather: "45 °F",
          wind_speed: "0.00 mph",
          wind_dir: "0°",
        },
        {
          id : 24,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/262/cordevalle2-carousel_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "CORDEVALLE",
          desc2: "Silicon Valley, California",
          coordinates: "37.067811° N / -121.632827° W",
          weather: "54 °F",
          wind_speed: "1.01 mph",
          wind_dir: "205°",
        },
        {
          id : 25,
          image: "https://dxaurk9yhilm4.cloudfront.net/images/7325/Estancia_sized_d169f13de117664acdaa1543841b7c16.jpg",
          desc1: "ESTANCIA",
          desc2: "Scottsdale, Arizona",
          coordinates: "33.738105° N / -111.865240° W",
          weather: "66 °F",
          wind_speed: "3.00 mph",
          wind_dir: "112°",
        },
    ];
}