<template>
    <div class="gallery-header">
        <img src='https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg'>
        <div class="gallery-header-text">
            <h1 v-text="gallery"></h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
})
export default class Galleryheader extends Vue {
    private readonly gallery: string = 'Gallery'
}
</script>

<style lang="scss">
@mixin position($pos){
    position: $pos;
    top: 0;
    left: 0;
}
.gallery-header{
    @include position(relative);
    height: 65vh;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
}
.gallery-header img{
    @include position(absolute);
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.gallery-header-text h1{
    position: relative;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 51px;
    font-family: gt-sectra;
    margin: 0 auto;
    margin-left: -14%;
}
.gallery-header-text{
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>