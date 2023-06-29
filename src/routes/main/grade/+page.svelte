<script>
    import Header from "../../../components/Header.svelte";

    /** @type {import('./$types').PageServerData} */
    export let data;
</script>

<svelte:head>
    <title>Yellow Calendar: MY 옐로카 등급</title>
</svelte:head>

<Header headerTitle="MY 옐로카 등급" />

<main>
    <section id="grade">
        <p>
            {data.name} 님의<br>
            차량 등급은<br>
            <span class="five warn">5등급</span> 입니다.
        </p>
    </section>
    <section>
        <hr class="indicateGrade">
        <span class="outCircle five">
        </span>
        <span class="inCircle five"></span>
    </section>
    <section class="five tip">
        <p>현재 운행 제한 조건에 해당하는 등급입니다.</p>
    </section>
    {#if !data.grade || data.grade === 5}
        <section class="gradeFiveLimits five">
            <a href="https://www.kotsa.or.kr/main.do" target="_blank">
                자동차 종합검사 신청 페이지 바로가기
                <img src="/icons/goNextOrange.svg" alt="graphic">
            </a>
            <a href="https://easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=1346&ccfNo=4&cciNo=1&cnpClsNo=2" target="_blank">
                배출가스 및 미세먼지 저감 장치 부착 안내
                <img src="/icons/goNextOrange.svg" alt="graphic">
            </a>
            <a href="https://www.aea.or.kr/biz/esBizIntro.do" target="_blank">
                조기폐차 안내
                <img src="/icons/goNextOrange.svg" alt="graphic">
            </a>
        </section>
    {/if}
</main>

<style>
    main {
        font-weight: 500;
        margin-top: 3.5em;
        font-size: 1.5em;
    }

    section hr {
        z-index: 0;
        width: 100%;
        height: 0.3em;
        background: #D9D9D9;
        border-radius: 25px;
        border: none;

        margin-top: 2em;
    }

    .warn {
        font-size: 1.2em;
        font-weight: 900;
        color: var(--y-cal-warn-color);
    }

    .tip {
        border-radius: 1.4em;
        margin: 3em 1em;
        padding: 0.25em 1em;

        background: var(--y-cal-warn-color);
        color: #FFFFFF;
        
        font-size: 0.7em;
        word-break: keep-all;
    }

    .five {
        --y-cal-warn-color: #F05F3F;
    }

    .four {
        --y-cal-warn-color: #F07B3F;
    }

    .three {
        --y-cal-warn-color: #FFBA00;
    }

    .two {
        --y-cal-warn-color: #FFD460;
    }

    .one {
        --y-cal-warn-color: #367AFF;
    }

    .outCircle {
        display: block;
        z-index: 1;
        height: 1em;
        width: 1em;
        padding: 2px;
        position: absolute;

        background: var(--y-cal-warn-color);
        border: solid 1px var(--y-cal-warn-color);
        opacity: 0.6;
        border-radius: 50%;

        margin-top: -1.3em;
        right: 0.6em;
    }

    .inCircle {
        display: block;
        z-index: 2;
        height: 0.5em;
        width: 0.5em;
        padding: 2px;
        position: absolute;

        background: var(--y-cal-warn-color);
        border: solid 1px var(--y-cal-warn-color);
        opacity: 1.0;
        border-radius: 50%;

        margin-top: -1.05em;
        right: 0.85em;
    }

    .gradeFiveLimits a {
        display: flex;
        justify-content: space-between;
        border-radius: 1.4em;
        color: var(--y-cal-warn-color);
        background-color: #FFFFFF;
        margin: 1em 0;
        padding: 1em 2em;
        gap: 1em;

        text-decoration: none;
        font-size: 0.8em;
        word-break: keep-all;
    }
</style>