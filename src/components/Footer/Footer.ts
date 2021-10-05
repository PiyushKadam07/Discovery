import { Vue } from 'vue-class-component';

export default class Footer extends Vue {
    contact = [`GET IN TOUCH`, `(480) 624-5200`, `<u> mail@discoverylandco.com </u>`];

    routes = [
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

    otherroutes = [ "Magazine", "Careers", "Foundation", "Company", "Contact", "Privacy" ];

    copyright = "© Discovery Land Company. All rights reserved.";
}
