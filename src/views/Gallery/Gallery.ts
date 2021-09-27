import "./Gallery.scss";
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Galleryheader from '@/components/Gallery/Galleryheader.vue';
import Galleryphotos from '@/components/Gallery/Galleryphotos.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
  components: {
    Header,
    Galleryheader,
    Galleryphotos,
    Footer
  },
})

export default class Gallery extends Vue {
}