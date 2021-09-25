<template>
    <div class="carouselcontent">
        <div class="carousel">
            <img :src="itemlist.image" class="carouselimg"/>
        </div>
        <div class="imgcontent">
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

export default class Carousel extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.carousel {
    width: 500px;
    margin: 2px -8px;
    height: 575px;
}

.carouselimg {
    width: 90%;
    height: 100%;
}

.imgcontent {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2.5rem 3rem;
    z-index: 5;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.description {
    margin-bottom: 1rem;
    white-space: normal;
    color: #fff;
    font-size: 2rem;
}

.description1 {
    font-size: 14px;
    font-family: messina-sans;
    line-height: 1.5;
    white-space: normal;
    color: #ffffffbf;
}
</style>