import "./Experiences.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'; // @ is an alias to /src
import Homevideo from '@/components/Homevideo/Homevideo.vue'; // @ is an alias to /src
import Headertext from "@/components/Headertext/Headertext.vue";
import Text1image from "@/components/Text1image/Text1image.vue";
import Ourworldsfooter from "@/components/Ourworldsfooter/Ourworldsfooter.vue";
import Imageshadow from "@/components/Imageshadow/Imageshadow.vue";

@Options({
    components: {
      Header,
      Homevideo,
      Headertext,
      Text1image,
      Imageshadow,
      Ourworldsfooter,
      Footer
    },
  })

export default class Experiences extends Vue {
    videotext1 = "Unforgettable";
    videotext2 = "experiences";

    content1 = `<p> Memorable days. Exceptional nights. We believe it’s our mission to make every minute matter. So you can live your life to the fullest, with the people closest to you. </p>`;

    content2title = "Exclusive to your world";
    content2para = `<p>Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of community through exceptional clubhouses, world-class golf courses, welcoming staff and an extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.</p>`;
    content2url = "https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg";

    content3title = "Golf";
    content3para = `<p> We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities. </p>`;
    content3url = "https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg";
    content3flag = true;

    content4title = "Outdoor Pursuits";
    content4para = `<p> Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer. </p>`;
    content4url = "https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg";
    content4flag = false;

    content5title = "Wellness";
    content5para = `<p> Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms. </p>`;
    content5url = "https://dxaurk9yhilm4.cloudfront.net/images/145/Wellness_image_4d32d1f061062da257f8ac1083a047ac.jpg";
    content5flag = true;

    content6url = "https://dxaurk9yhilm4.cloudfront.net/images/139/img_5dabbd1a34149dcaed83515ff1526a0f.jpg";
}
  