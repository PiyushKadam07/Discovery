import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title1 : {
            type : String
        },
        title2 : {
            type : String
        },
    },
})

export default class Carouselheader extends Vue {
}