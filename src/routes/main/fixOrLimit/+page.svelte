<script>
    import Header from "../../../components/Header.svelte";
    import { onMount } from "svelte";

    const kakaoMapKey = import.meta.env.VITE_KAKAO_JS_KEY;
    const kakaoConvertKey = import.meta.env.VITE_KAKAO_REST_KEY;

    /** @type {import('./$types').PageServerData} */
    export let data;
    let imageSize = null;
    let markerImage = null;
    let marker = null;
    let locationKeyword = null

    onMount(async() => {
        const container = document.getElementById("map"),
        options = {
            center: new kakao.maps.LatLng(36.81505,127.11395),
            level: 6
        };

        const map = new kakao.maps.Map(container, options);

        // for (let i = 0; i < positions.length; i++) {

        //     imageSize = new kakao.maps.Size(24, 24);
        //     markerImage = new kakao.maps.MarkerImage("/icons/marker.png", imageSize);
        //     marker = new kakao.maps.Marker({
        //         map: map,
        //         position: positions[i].loc,
        //         title: positions[i].title,
        //         image: markerImage
        //     });
        // }

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                const addressData = await fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.JSON?x=${coords.longitude}&y=${coords.latitude}`, {
                    headers: {
                        "Authorization": `KakaoAK ${kakaoConvertKey}`
                    }
                });
                const address = await addressData.json();

                locationKeyword = address.documents[0]["address_name"];
                map.setCenter(new kakao.maps.LatLng(coords.latitude, coords.longitude));
            }, (error) => {
                console.log(error);
            }, {
                enableHighAccuracy: true,
                maximumAge: 10000,
                timeout: 5000
            });
        }
    });
</script>

<svelte:head>
    <title>Yellow Calendar: 수리센터 찾기</title>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey={kakaoMapKey}"></script>
</svelte:head>

<Header headerTitle="MY 옐로카 수리센터 찾기" backMenu="/main" />

<main>

    <section id="currentLocation">
        <p>{locationKeyword ?? "현재 위치를 찾고 있어요"}</p>
    </section>
    <section id="map"/>
</main>

<footer>
    <section>
        {#if !locationKeyword}
        <p>옐로우캘린더가 현재 위치를 기반으로<br>주변 수리센터를 탐색 중이에요 🙂</p>
        {/if}
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
        margin: 1em 1em;
        padding: 1em;
        background: #FFFFFF;
        color: #000000;
    }

    section p {
        font-size: 1.15em;
        text-align: center;
        word-break: keep-all;
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

    #currentLocation {
        margin: 3.5em 0.25em 0 0.25em;
        border-radius: 1.4em;
        background: #FFFFFF;
        color: #000000;
        padding: 0.1em 1em;
    }
</style>