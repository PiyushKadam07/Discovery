<template>
    <div class="press">
        <Header />

        <Aboutimage  v-bind:title1="headertitle1" :title2="headertitle2" :url="headerurl" />

        <Imagedescription />

        <div class="news">
            <div class="newsheader"> Press </div>
            <div class="news-div">
                <div class = "newcontent" v-for="items in newsData" :key="items.id">
                    <div class="newsection">
                        <p class = "description"> {{ items.title }} </p>
                        <p class = "description1"> {{ items.subtitle }} </p> 
                        <button> Read Article </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script type="module" src="./Press.ts"></script>
