<template>
    <div class="experiences">
        <Header />

        <Homevideo :text1="videotext1" :text2="videotext2"/>
        
        <Headertext v-bind:title="content1" />
        
        <Text1image v-bind:title="content2title" :para1="content2para" :url="content2url" />
        
        <Imageshadow v-bind:title="content3title" :para="content3para" :url="content3url" :check="content3flag" />

        <Imageshadow v-bind:title="content4title" :para="content4para" :url="content4url" :check="content4flag" />

        <Imageshadow v-bind:title="content5title" :para="content5para" :url="content5url" :check="content5flag" />

        <Ourworldsfooter v-bind:url="content6url" />

        <Footer />
    </div>
</template>

<script type="module" src="./Experiences.ts"></script>