import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        text1: {
            type: String
        },
        text2: {
            type: String
        },
    }
})

export default class Homepage extends Vue {
}