import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title : {
            type : String
        },
        para : {
            type : String
        },
        url : {
            type : String
        },
        check : {
            type : Boolean
        },
    },
})

export default class Imageshadow extends Vue {
}