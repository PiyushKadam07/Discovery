// This component shows images with location section in ourworlds page
<template>
    <div class="ourworldimage">
        <img :src="itemlist.image" />
        <span class = "description"> {{ itemlist.desc1 }}</span>
        <span class = "description1"> {{ itemlist.desc2 }}</span> 
    </div>

</template>

<script type="module" src="./Imagegallery.ts"></script>

<style scoped lang="scss">
    @import "./Imagegallery.scss";
</style>