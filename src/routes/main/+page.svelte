<script>
    import { Dust } from "svelte-weather";

    const today = new Date(Date.now());
    const date = {
        0: "일", 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토"
    }

    /** @type {import('./$types').PageServerData} */
    export let data;
</script>

<svelte:head>
    <title>Yellow Calendar: 홈</title>
</svelte:head>

<header>
    <h1>YELLOW CALENDAR</h1>
</header>

<main>
    <section id="carInfo">
        <h2>
            <span class="name">{data.name}</span> 님의 <span class="primary">옐로카</span>
        </h2>
        <div id="carNumber">
            {data.car}
        </div>
        <ul>
            <li><span class="carInfoCategory">모델명</span> {data.model}</li>
            <li><span class="carInfoCategory">연식</span> {data.year}</li>
            <li><span class="carInfoCategory">디젤</span> {data.engine}</li>
        </ul>
    </section>
    <section id="weatherBanner">
        <section id="weather" class="card">
            <div id="weatherLocation">
                <p>{today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {date[today.getDay()]}</p>
                <h2>
                    충청남도 천안시
                    <Dust color="#FFFFFF" size="2em" />
                </h2>
            </div>
            <p id="weatherCelcius">25.5°C</p>
        </section>
        <section id="weatherNoticeBanner">
            <p id="weatherNotice">현재 천안시는 <span class="finedust_veryHigh">미세먼지 심각 단계</span>이므로<br> 옐로카 운행이 불가합니다.</p>
        </section>
    </section>
    <section id="myYellowCar" class="card">
        <div>
            <h2>MY 옐로카 등급 확인하러 가기</h2>
            <p>내 차의 등급은 몇 등급일까?</p>    
        </div>
        <img src="/icons/location.svg" alt="graphic" />
        <img src="/icons/goNextOrange.svg" alt="graphic" />
    </section>
    <section id="operateInfo">
        <a href="/main/availableDay" id="operateDay" class="card">
            <div>
                <p>
                    MY 옐로카<br>
                    운행 가능일<br>
                    확인하기
                    <span>
                        데이터가 예측한 월별 운행 가능일을 확인해보세요 :&#41;
                    </span>
                </p>                    
            </div>
            <img src="icons/goNext.svg" alt="graphic" />
        </a>
        <a href="" id="fixOrLimit" class="card">
            <div>
                <p>
                    MY 옐로카<br>
                    수리센터<br>
                    찾아보기
                    <span>
                        나와 가까운 곳에 위치한 수리센터를 찾아드려요 :&#41;
                    </span>        
                </p>
            </div>
            <img src="icons/goNext.svg" alt="graphic" />
        </a>    
    </section>
</main>

<style>
    header h1 {
        font-size: 1.2em;
        font-weight: 700;

        color: #FFD460;
    }

    section {
        margin-bottom: 1em;
    }

    .carInfoCategory {
        width: 3em;
        display: inline-block;
    }

    .name {
        font-size: 1.2em;
    }

    .primary {
        color: #FFD460;
    }

    .secondary {
        color: #F07B3F;
    }

    .finedust_veryHigh {
        color: #F07B3F;
        text-decoration: underline;
        font-weight: 700;
    }

    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;        
    }
    
    #carNumber {
        border-radius: 1.25em;
        padding: 1.2em;
        
        background: #F3F3F3;
        color: #616161;
        
        font-size: 1.4em;
        font-weight: 700;
        letter-spacing: 0.4em;
        text-align: center;
    }

    #carInfo {
        background: #FFFFFF;
        border-radius: 1.4em;
        padding: 0.5em 1.4em;
    }

    #carInfo ul {
        list-style: none;
        padding: 0.25em;
        color: #BABABA;
    }

    #myYellowCar {
        background: #FFFFFF;
        border-radius: 1.4em;
        padding: 1em 1.4em;        
    }

    #myYellowCar h2 {
        color: #F07B3F;
        font-size: 1.1em;
        margin: 0 0 0.2em 0;
    }

    #myYellowCar p {
        font-size: 0.9em;
        margin: 0;
        color: #C6C6C6;
    }

    #operateInfo {
        display: flex;
        gap: 1em;
    }

    #operateInfo a {
        aspect-ratio: 1/1;
        width: 100%;
        padding: 1em;
        color: #FFFFFF;
        border-radius: 1.25em;

        font-size: 1.1em;
        font-weight: 700;
        text-decoration: none;
        word-break: keep-all;
    }

    #operateInfo p {
        margin: 0;
        padding: 0;
    }

    #operateInfo a span {
        display: inline-block;
        font-weight: 500;
        font-size: 0.8em;
        padding-top: 0.5em;
    }

    #operateDay {
        background: #F07B3F;
    }

    #fixOrLimit {
        background: #FFD460;
    }

    #weatherBanner {
        background: #FFFFFF;
        border-radius: 1.4em;
    }

    #weatherNoticeBanner {
        padding: 0.1em 1em;
        font-size: 1.1em;
    }

    #weatherNoticeBanner p {
        margin: 0.8em 0;
    }

    #weather {
        background: #F05F3F;
        color: #FFFFFF;

        border-radius: 1.4em;
        padding: 0.1em 1em;
        margin-bottom: auto;
    }

    #weatherLocation p {
        margin: 0.5em 0 0 0;
    }

    #weatherLocation h2 {
        margin: 0;
        display: flex;
        align-items: center;
    }

    #weatherCelcius {
        font-size: 1.8em;
        font-weight: 500;
        margin-inline-end: 0.3em;
    }

</style>