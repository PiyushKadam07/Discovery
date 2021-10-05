import { Options, Vue } from 'vue-class-component';

@Options({
    name: "Header",
    data(){
        return{
            iconopen: false,
        };
    }
})

export default class Header extends Vue {
    routes = [
        {
            to: "/",
            path: "",
        },
        {
            to: "/about-dlc",
            path: "About DLC",
        },
        {
            to: "/our-worlds",
            path: "Our Worlds",
        },
        {
            to: "/experiences",
            path: "Experiences",
        },
        {
            to: "/gallery",
            path: "Gallery",
        },
        {
            to: "/press",
            path: "Press",
        },
    ];
}