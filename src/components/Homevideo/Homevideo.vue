// homepage video
<template>
  <div class="video-container">
      <video autoplay muted loop>
          <source src="../../assets/main.mp4" type="video/mp4" />
      </video>
      <div class="videotitle">
        <div class="videotext"> {{ text1 }} </div>
        <div class="videotext1"> {{ text2 }} </div>
      </div>
    </div>
</template>

<script type="module" src="./Homevideo.ts"></script>

<style scoped lang="scss">
    @import "./Homevideo.scss";
</style>
