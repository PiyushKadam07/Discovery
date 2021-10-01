import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        lefturl : {
            type : String
        },
        righturl : {
            type : String
        },
        title : {
            type : String
        },
        para : {
            type : String
        },
        flag : {
            type : Boolean
        },
    },
})

export default class Textimage extends Vue {
}