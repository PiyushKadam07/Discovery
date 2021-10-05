import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title : {
            type : String
        },
        para1 : {
            type : String
        },
        para2 : {
            type : String
        },
        url : {
            type : String
        },
    },
})

export default class Text1image extends Vue {
}