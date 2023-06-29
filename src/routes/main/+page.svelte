<script>
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
        <section id="weather">
            <div id="weatherLocation">
                <p>{today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {date[today.getDay()]}</p>
                <h2>
                    충청남도 천안시
                    <span id="weatherIcon"></span>
                </h2>
            </div>
            <p id="weatherCelcius">25.5°C</p>
        </section>
        <section id="weatherNoticeBanner">
            <p id="weatherNotice">현재 천안시는 <span class="finedust_veryHigh">미세먼지 심각 단계</span>이므로<br> 옐로카 운행이 불가합니다.</p>
        </section>
    </section>
    
    <section id="myYelloCar">
        <h2>MY 옐로카 등급 확인하러 가기</h2>
        <p>내 차의 등급은 몇 등급일까?</p>
    </section>
    <section id="operateInfo">
        <a href="">
            운행 가능일 확인하기
            <span></span>
        </a>
        <a href="">
            마이 옐로카 운행 제한 조건 확인하러 가기
            <span></span>
        </a>
    </section>
</main>

<style>
    :global(html) {
        height: 100%;

        background: #F6F6F6;
        padding: 1em;
        font-family: "Pretendard Variable", sans-serif;
    }

    header h1 {
        font-size: 1.2em;
        font-weight: 700;

        color: #FFD460;
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
        padding: 1em;
        color: #BABABA;
    }

    #weatherBanner {
        background: #FFFFFF;
        border-radius: 1.4em;
    }

    #weatherNoticeBanner {
        padding: 0.5em 1em;
    }

    #weather {
        background: #F05F3F;
        color: #FFFFFF;

        border-radius: 1.4em;
        padding: 0.5em 1em;
        margin-top: 1.5em;

        display: flex;
        justify-content: space-between;
    }

    #weather #weatherLocation h2 {
        margin-top: 0;
    }

    #weatherCelcius {
        font-size: 2em;
        font-weight: 500;

        margin-inline-end: 0.5em;
    }

</style>