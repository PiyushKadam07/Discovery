import "./Press.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Aboutimage from "@/components/Aboutimage/Aboutimage.vue";
import Imagedescription from "@/components/Imagedescription/Imagedescription.vue";
import Footer from '@/components/Footer/Footer.vue';

@Options({
  components: {
    Header,
    Aboutimage,
    Imagedescription,
    Footer
  },
})

export default class Press extends Vue {
    headerurl = "https://dxaurk9yhilm4.cloudfront.net/images/889/DJI_0161-copy_2cbd80a0345be3b5a0b7649a1a2d057f.jpg";
    headertitle1 = "News";
    headertitle2 = "and Press";

    newsData =  [
        {
            id: 1,
            title: "10 Fairways to Tee Off on Now",
            subtitle: "Vegas Magazine I September 2021",
        },
        {
            id: 2,    
            title: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
            subtitle: "Bloomberg I September 2021",
        },
        {
            id: 3,    
            title: "Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",
            subtitle: "Telegraph UK | August 20, 2021",
        },
        {
            id: 4,
            title: "This Property Company Ups the Ante with  Luxury and Sustainability",
            subtitle: "Sunset Magazine | August 13, 2021",
        },
        {
            id: 5,
            title: "Where Sun, Sand and Splendor Are Still to Be Discovered",
            subtitle: "New York Times | June 9, 2021",
        },
        {
            id: 6,    
            title: "Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts, which became irresistible to the rich and famous during the pandemic",
            subtitle: "Business Insider |  June 4, 2021",
        },
        {
            id: 7,    
            title: "There's a real buy-in for resort communities offering amusement and amenities",
            subtitle: "Luxury Magazine | Spring/Summer 2021",
        },
        {
            id: 8,    
            title: "This Blue Chip Caribbean Island Hopes to Dethrone St. Barts",
            subtitle: "New York Post | April 5, 2021",
        },
        {
            id: 9,
            title: "No Longer Waiting for Retirement",
            subtitle: "New York Times International Homes | March 27-28, 2021",
        },
        {
            id: 10,    
            title: "Golf and Pickleball are Having a Love Affair",
            subtitle: "New York Times | March 22, 2021",
        },
        {
            id: 11,    
            title: "For Many, the Pandemic Has Led to the 'Discovery' of Golf",
            subtitle: "New York Times | March 22, 2021",
        },
    ];
}

