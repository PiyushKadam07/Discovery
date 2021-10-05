// This component shows image with description and box-shadow in experience page
<template>
    <div class="imageshadow" v-if="check">
        <div class="leftcolumn" style="height: 100%; box-shadow: 85px 150px #ceb7b7;">
            <img :src="url">
        </div>
        <div class="rightcolumn">
            <div class="rightblock">
                <span class="title"> {{ title }} </span>
                <p v-html="para"></p>
            </div>        
        </div>
    </div>
    <div class="imageshadow" v-else style="direction: rtl;">
        <div class="leftcolumn" style="height: 100%; box-shadow: -85px 150px #ceb7b7;">
            <img :src="url">
        </div>
        <div class="rightcolumn">
            <div class="rightblock">
                <span class="title"> {{ title }} </span>
                <p v-html="para"></p>
            </div>        
        </div>
    </div>
</template>

<script type="module" src="./Imageshadow.ts"></script>

<style scoped lang="scss">
    @import "./Imageshadow.scss";
</style>