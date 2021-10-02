import { Vue } from 'vue-class-component';

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