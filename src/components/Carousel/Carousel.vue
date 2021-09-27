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

<script type="module" src="./Carousel.ts"></script>

<style scoped lang="scss">
    @import "./Carousel.scss";
</style>