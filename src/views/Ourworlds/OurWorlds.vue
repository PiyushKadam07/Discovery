<template>
  <div class="ourworlds">
     <div class="main">
      <Header />
    </div>
    <div class = "image-main">    
      <div class = "images" v-for="items in bodycontent" :key="items.id">
        <div class="image">
          <!-- <img class = "ourworldimg" v-bind:src="items.image"/> -->
          <!-- <p class = "description1"> {{ items.desc1 }}</p>
          <p class = "description2"> {{ items.desc2 }}</p>-->
          <Image v-bind:itemlist="items" /> 
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script type="module" src="./OurWorlds.ts"></script>
