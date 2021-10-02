import "./Press.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Aboutimage from "@/components/Aboutimage/Aboutimage.vue";
import Footer from '@/components/Footer/Footer.vue';

@Options({
  components: {
    Header,
    Aboutimage,
    Footer
  },
})

export default class Press extends Vue {
    headerurl = "https://dxaurk9yhilm4.cloudfront.net/images/889/DJI_0161-copy_2cbd80a0345be3b5a0b7649a1a2d057f.jpg";
    headertitle1 = "News";
    headertitle2 = "and Press";
}