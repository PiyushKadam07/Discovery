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