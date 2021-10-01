<template>
    <div class="textimage" v-if="flag">
        <div class="leftcolumn">
            <img :src="lefturl">
        </div>
        <div class="rightcolumn">
            <div class="right_top">
                <div class="title"> {{ title }} </div>
                    <p v-html="para"></p>
            </div>
            <div class="right_bottom">
                <img :src="righturl">
            </div>
        </div>
    </div>
    <div class="textimage" v-else style="direction: rtl;">
        <div class="leftcolumn">
            <img :src="lefturl">
        </div>
        <div class="rightcolumn">
            <div class="right_top">
                <div class="title"> {{ title }} </div>
                    <p v-html="para"></p>
            </div>
            <div class="right_bottom">
                <img :src="righturl">
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Textimage.ts"></script>

<style scoped lang="scss">
    @import "./Textimage.scss";
</style>