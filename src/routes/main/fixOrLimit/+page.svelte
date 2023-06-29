<script>
    import Header from "../../../components/Header.svelte";
    import { onMount } from "svelte";

    const kakaoMapKey = import.meta.env.VITE_KAKAO_JS_KEY;
    const kakaoConvertKey = import.meta.env.VITE_KAKAO_REST_KEY;
    const positions = [];

    let imageSize = null;
    let markerImage = null;
    let marker = null;
    let locationKeyword = null

    onMount(async() => {
        const container = document.getElementById("map"),
        options = {
            center: new kakao.maps.LatLng(36.81505,127.11395),
            level: 8
        };

        const map = new kakao.maps.Map(container, options);

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                const addressData = await fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.JSON?x=${coords.longitude}&y=${coords.latitude}`, {
                    headers: {
                        "Authorization": `KakaoAK ${kakaoConvertKey}`
                    }
                });
                const address = await addressData.json();
                
                const nearCarFixData = await fetch(`https://api.dustdrive.info/api/v1/repairShop/near`, {
                    method: "POST",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: `{
                        "location": {
                            "x": ${coords.longitude},
                            "y": ${coords.latitude}
                        }
                    }`
                })
                const nearCarFix = await nearCarFixData.json();
                const storeList = nearCarFix.nearRepairShopList;

                map.setCenter(new kakao.maps.LatLng(coords.latitude, coords.longitude));

                imageSize = new kakao.maps.Size(24, 24);
                markerImage = new kakao.maps.MarkerImage("/icons/marker.png", imageSize);
                marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(coords.latitude, coords.longitude),
                    image: markerImage
                });

                for (let i = 0; i < storeList.length; i++) {    
                    positions.push(
                        {
                            title: storeList[i].shop,
                            address: storeList[i].address,
                            tel: storeList[i].tel,
                            loc: new kakao.maps.LatLng(storeList[i].location.y, storeList[i].location.x)
                        }
                    );

                    marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(storeList[i].location.y, storeList[i].location.x),
                        title: storeList[i].shop
                    });
                }

                locationKeyword = address.documents[0]["address_name"];
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
    <section id="placeList">
        {#if !locationKeyword}
        <p>옐로우캘린더가 현재 위치를 기반으로<br>주변 수리센터를 탐색 중이에요 🙂</p>
        {:else}
        <h2>내 주변 옐로카 수리센터</h2>
        <ul>
            {#each positions as item}
            <li>
                <p><span class="carTitle">{item.title}</span> <span class="carTel">{item.tel}</span></p>
                <p class="carAddress">{item.address}</p>
            </li>
            {/each}
        </ul>
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

        height: 30vh;
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

    section h2 {
        font-size: 1.25em;
        margin: 0.5em 0.5em;
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

    #placeList {
        overflow: scroll;
    }

    section ul {
        list-style: none;
        padding: 0;
    }

    section ul li {
        border-radius: 1.4em;
        display: block;
        background: #FFF0C8;

        padding: 1em 1em;
        margin: 0.5em;
    }

    section ul li p {
        margin: 0;
        text-align: start;
        
    }

    .carTitle, .carTel {
        color: #F07B3F;
    }

    .carTitle {
        font-size: 1.0em;
        font-weight: 700;
        margin-inline-end: 0.15em;
    }

    .carTel {
        font-size: 0.85em;
    }

    .carAddress {
        color: #AF9C92;
        margin: 0.2em 0 0 0;
        font-size: 0.8em;
    }
    
</style>