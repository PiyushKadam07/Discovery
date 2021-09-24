<template>
    <div class = "image-main">
        <!-- <img
          class="gallery-head"
          src="https://dxaurk9yhilm4.cloudfront.net/images/8812/DJI_0265_RET_2_210405_212842_d169f13de117664acdaa1543841b7c16.jpg"
        /> -->
        <div class="image">
            <img :src="itemlist.image" />
            <span class = "description"> {{ itemlist.desc1 }}</span>
            <span class = "description1"> {{ itemlist.desc2 }}</span> 
        </div>
    </div>

</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        itemlist : {
        type : Object
        },
    },
})

export default class Imagegallery extends Vue {
   
}

</script>

<style lang="scss">

</style>
