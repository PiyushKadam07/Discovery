<template>
    <div class="imagedescription">
        <div class="header">
            <span class="title">Latest News</span>
        </div>
        <div class="img-content">
            <div class="image">
                <img :src="this.selectedValue.image">
            </div>
            <div class="content">
                <p class="text">{{ this.selectedValue.text }}</p>
                <p class="contenttitle" v-html="this.selectedValue.contenttitle"></p>
                <p class="para">{{ this.selectedValue.para }}</p>
            </div>
        </div>
        <div class="directions">
            <button @click="leftmeth(this.selectedValue.id)">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000"><path d="M68.155,45.0425c-0.7525,0.13438 -1.42437,0.51063 -1.935,1.075l-37.5175,37.41l-2.365,2.4725l2.365,2.4725l37.5175,37.41c0.83313,1.02125 2.16344,1.49156 3.45344,1.19594c1.27656,-0.29562 2.28438,-1.30344 2.58,-2.58c0.29563,-1.29 -0.17469,-2.62031 -1.19594,-3.45344l-31.605,-31.605h101.5875c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-101.5875l31.605,-31.605c1.11531,-1.03469 1.41094,-2.67406 0.73906,-4.03125c-0.65844,-1.37062 -2.15,-2.12312 -3.64156,-1.88125z"></path></g></g></svg>
            </button>
            <span> {{ this.selectedValue.id }} - {{ this.bodycontent.length }} </span>
            <button @click="rightmeth(this.selectedValue.id)">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000"><path d="M102.6625,45.0425c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l31.605,31.605h-101.5875c-0.1075,0 -0.215,0 -0.3225,0c-1.89469,0.09406 -3.37281,1.70656 -3.27875,3.60125c0.09406,1.89469 1.70656,3.37281 3.60125,3.27875h101.5875l-31.605,31.605c-1.02125,0.83313 -1.49156,2.16344 -1.19594,3.45344c0.29562,1.27656 1.30344,2.28438 2.58,2.58c1.29,0.29563 2.62031,-0.17469 3.45344,-1.19594l37.5175,-37.41l2.365,-2.4725l-2.365,-2.4725l-37.5175,-37.41c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075c-0.1075,0 -0.215,0 -0.3225,0z"></path></g></g></svg>
            </button>
        </div>
    </div>
</template>

<script type="module" src="./Imagedescription.ts"></script>

<style scoped lang="scss">
    @import "./Imagedescription.scss";
</style>