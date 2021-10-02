// This component shows images section in gallery page
<template>
    <div class="gallery-photo">
        <div class="photo-frame" v-for="items in bodycontent" :key="items.id">
            <figure class="photos" >
                <img :src="items.image">
            </figure>
            <h1> {{ items.title }} </h1>
        </div>
    </div>
</template>

<script type="module" src="./Galleryphotos.ts"></script>

<style scoped lang="scss">
    @import "./Galleryphotos.scss";
</style>