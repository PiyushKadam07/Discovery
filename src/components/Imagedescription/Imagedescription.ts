import { Options, Vue } from 'vue-class-component';

@Options({
})

export default class Imagedescription extends Vue {
    bodycontent = [
        {
            id : 1,
            image: "https://dxaurk9yhilm4.cloudfront.net/images/8790/DJI_0265_RET_2_210405_191033_8cfe90628771654de81065d52a5bfbcf.jpg",
            text: "News",
            contenttitle: "Discovery’s newest property in Kaua’i North Shore Preserve",
            para: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.",
        },
        {
            id : 2,
            image: "https://dxaurk9yhilm4.cloudfront.net/images/7003/HERO_1920_200615_181847_8cfe90628771654de81065d52a5bfbcf.jpg",
            text: "News",
            contenttitle: "James Island <br> Discovery's Newest Property",
            para: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.",
        },
        {
            id : 3,
            image: "https://dxaurk9yhilm4.cloudfront.net/images/523/CostaTerra1-copy_8cfe90628771654de81065d52a5bfbcf.jpg",
            text: "News",
            contenttitle: "CostaTerra <br> Discovery's 23rd property",
            para: "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",
        },
        {
            id : 4,
            image: "https://dxaurk9yhilm4.cloudfront.net/images/251/Troubadour-carousel_190620_130709_8cfe90628771654de81065d52a5bfbcf.jpg",
            text: "News",
            contenttitle: "Troubadour To Open Golf Course Fall 2019",
            para: "Troubadour Golf &amp; Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.",
        },
    ];

    content = '';
    selectedValue = this.bodycontent[0];

    leftmeth(e: number): void {
        if ( e != 1 ) {
            const data = (e-2) % this.bodycontent.length;
            this.selectedValue = this.bodycontent[data];
        }
        else {
            const data = this.bodycontent.length - 1;
            this.selectedValue = this.bodycontent[data];
        }  
    }

    rightmeth(e: number): void {
        const data = (e) % this.bodycontent.length;
        this.selectedValue = this.bodycontent[data];  
    }
}