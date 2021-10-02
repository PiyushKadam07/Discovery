<template>
  <div class="press">
    <Header />

    <Aboutimage  v-bind:title1="headertitle1" :title2="headertitle2" :url="headerurl" />
    
    <Footer />
  </div>
</template>

<script type="module" src="./Press.ts"></script>
