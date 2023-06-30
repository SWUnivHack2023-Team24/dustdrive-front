<script>
    import Header from "../../../components/Header.svelte";
    import { onMount } from "svelte";

    const kakaoMapKey = import.meta.env.VITE_KAKAO_JS_KEY;

    /** @type {import('./$types').PageServerData} */
    export let data;
    let imageSize = null;
    let markerImage = null;
    let marker = null;

    function attachMap() {
        const container = document.getElementById("map"),
        options = {
            center: new kakao.maps.LatLng(35.41552,127.87339),
            level: 13
        };

        const map = new kakao.maps.Map(container, options);
        const positions = [
            {
                title: '서울특별시', 
                loc: new kakao.maps.LatLng(37.5647,126.9793)
            },
            {
                title: '인천광역시',
                loc: new kakao.maps.LatLng(37.4422,126.7026)
            },
            {
                title: '경기도',
                loc: new kakao.maps.LatLng(37.28880,127.05404)
            },
            {
                title: '대구광역시',
                loc: new kakao.maps.LatLng(35.8690,128.6066)
            },
            {
                title: '부산광역시',
                loc: new kakao.maps.LatLng(35.1727,129.0797)
            }
        ];

        for (let i = 0; i < positions.length; i++) {

            imageSize = new kakao.maps.Size(24, 24);
            markerImage = new kakao.maps.MarkerImage("/icons/marker.png", imageSize);
            marker = new kakao.maps.Marker({
                map: map,
                position: positions[i].loc,
                title: positions[i].title,
                image: markerImage
            });
        }
    }
</script>

<svelte:head>
    <title>Yellow Calendar: 절대 불가 지역</title>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey={kakaoMapKey}" on:load={attachMap()}></script>
</svelte:head>

<Header headerTitle="{data.name}님 절대 불가 지역을 안내드려요" backMenu="/main/availableDay" />

<main>
    <section id="map"/>
</main>

<footer>
    <section>
        <div class="tip">
            <p>절대 불가 지역</p>
        </div>
        <p>5등급 차량 제한 지역은 절대 운영이 불가합니다.</p>
    </section>
</footer>

<style>
    footer {
        border-top-right-radius: 1.4em;
        border-top-left-radius: 1.4em;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);

        height: 20vh;
    }

    section {
        border-top-right-radius: 1.4em;
        border-top-left-radius: 1.4em;
        
        height: 100%;
        margin: 0 1em;
        background: #FFE0E0;
        color: #F05F3F;
    }

    section p {
        text-align: center;
    }

    .tip {
        margin: 1em 1em 0 1em;
        padding: 1em 0.2em 0 0.2em;
    }

    .tip p {
        border-radius: 1.4em;
        padding: 0.5em 2em;
        margin: 0.5em;

        text-align: center;
        background: #F05F3F;
        color: #FFFFFF;
    }

    #map {
        z-index: -1;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        
        margin: 0;
    }
</style>