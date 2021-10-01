<template>
    <div class="text_image">
        <div class="leftcolumn">
            <div class="left_title">
                <span class="title"> {{ title }} </span>
            </div>
            <div class="left_txt">
                <p v-html="para1"></p>
                <p v-html="para2"></p>
            </div>
        </div>
        <div class="rightcolumn">
            <img :src="url">
        </div>
    </div>
</template>

<script type="module" src="./Text1image.ts"></script>

<style scoped lang="scss">
    @import "./Text1image.scss";
</style>