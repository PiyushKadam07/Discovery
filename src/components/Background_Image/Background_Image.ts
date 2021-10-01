import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        url : {
        type : String
        },
    },
})

export default class Background_Image extends Vue {
}