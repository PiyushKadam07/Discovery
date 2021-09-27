import './OurWorlds.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Image from '@/components/Ourworlds/Imagegallery.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
    components: {
        Header,
        Image,
        Footer
    },
})
export default class OurWorlds extends Vue {
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