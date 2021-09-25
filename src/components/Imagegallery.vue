<template>
    <div class="ourworldimage">
        <img :src="itemlist.image" />
        <span class = "description"> {{ itemlist.desc1 }}</span>
        <span class = "description1"> {{ itemlist.desc2 }}</span> 
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    props: {
        itemlist : {
        type : Object
        },
    },
})
export default class Imagegallery extends Vue {
   
}
</script>

<style lang="scss">
.ourworldimage {
    display: flex;
    flex-direction: column;
    text-align: left;
}
</style>