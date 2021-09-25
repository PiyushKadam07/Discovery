<template>
    <div class="gallery-photo">
        <div class="photo-frame">
            <figure class="photos">
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/7390/Stocksy_txp3615512ad2e200_OriginalDelivery_1580323-1_210301_201432_d169f13de117664acdaa1543841b7c16.jpg">
            </figure>
            <h1>Outdoor Pursuits</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/7386/img_210122_130752_1_d169f13de117664acdaa1543841b7c16.jpg">
            </figure>
            <h1>Golf</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/7394/preview-30_210301_201612_d169f13de117664acdaa1543841b7c16.jpeg">
            </figure>
            <h1>Lifestyle</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/7398/Playa-Grande14_DJI_0965-1-1_210301_201716_d169f13de117664acdaa1543841b7c16.jpg">
            </figure>
            <h1>Landscapes</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/7402/golf-club-house_d3867277feb154defec9b24a5714fadb-1_210301_201855_d169f13de117664acdaa1543841b7c16.jpg">
            </figure>
            <h1>Clubhouses</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="https://dxaurk9yhilm4.cloudfront.net/images/7406/Wellness-gallery-1_11014826b3e36b3697374f276a89b517-2_210301_202121_d169f13de117664acdaa1543841b7c16.jpg">
            </figure>
            <h1>Wellness</h1>
        </div>
    </div>
</template>
<style lang="scss">
    .gallery-photo{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .photos{
        padding-top: 65%;
        position: relative;
        overflow: hidden;
        margin: 0;
    }
    .photos img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1{
        font-family: gt-sectra;
        font-weight: 200;
        text-align: center;
        white-space: nowrap;
        padding: 3rem 1.5rem;
        font-size: 24px;
        line-height: 1.2;
        color: #fff;
    }
</style>