<template>
  <div class="ourworlds">
     <div class="main">
      <Header />
    </div>
    <div class = "image-main">    
      <div class = "images" v-for="items in bodycontent" :key="items.id">
        <div class="image">
          <Image v-bind:itemlist="items" /> 
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script type="module" src="./OurWorlds.ts"></script>
