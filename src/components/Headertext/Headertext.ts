import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title : {
            type : String
        },
    },
})

export default class Headertext extends Vue {
}