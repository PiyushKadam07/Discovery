// This component shows background image with title on it
<template>
    <div class="aboutimage">
        <div class="imgbg">
            <img :src="url">
        </div>
        <div class="imgtitle">
            <div class="imgtext"> {{ title1 }} </div>
            <div class="imgtext1"> {{ title2 }} </div>
        </div>
    </div>
</template>

<script type="module" src="./Aboutimage.ts"></script>

<style scoped lang="scss">
    @import "./Aboutimage.scss";
</style>