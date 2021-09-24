<template>
  <div class="main-gallery-div">
    <Galleryheader />
    <Galleryphotos />
    <Footer />
  </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Galleryheader from '@/components/Galleryheader.vue';
import Galleryphotos from '@/components/Galleryphotos.vue';
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    Galleryheader,
    Galleryphotos,
    Footer
  },
})

export default class Gallery extends Vue {
}
</script>

<style lang="scss">

body {
    background-color: #000;
}

</style>
