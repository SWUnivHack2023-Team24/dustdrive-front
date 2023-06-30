<script>
    import { CalendarView } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import Header from "../../../components/Header.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    const badFineDust = [];
    const normalFineDust = [];

    for(let i = 0; i < data.dusts.length; i++) {
        for (let j = 0; j < data.dusts[i].data.length; j++) {
            switch (data.dusts[i].data[j]["dust_info"]) {
                case "normal":
                    normalFineDust.push(new Date(data.dusts[i].data[j].date));
                    break;
                case "bad":
                case "worst":
                    badFineDust.push(new Date(data.dusts[i].data[j].date));
                    break;
            }
        }
    }

    console.log(data);
</script>

<svelte:head>
    <title>Yellow Calendar: 운행 가능일 확인</title>
</svelte:head>

<Header headerTitle="MY 옐로카 운행 가능 일정 확인하기" />

<main>
    <section class="tip">
        <p>미세먼지 농도를 미리 확인하여<br>운행일정을 조율할 수 있어요.</p>
    </section>
    <section id="calendar">
        <CalendarView
            value={normalFineDust}
            blackout={badFineDust} 
        />
        <p><span class="normal"/>보통 <span class="bad"/>나쁨</p>
    </section>
    <section class="tip" id="finedustWarning">
        <a href="/main/limitStates">
            미세먼지 농도가 나쁨일 때 운행할 경우<br>
            10만원 이상의 벌금이 부과됩니다.
        </a>
    </section>
</main>

<style>
    header {
        background: rgba(255, 255, 255, 0.8);
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        backdrop-filter: blur(10px);
    }

    header a {
        margin: 1em;
    }

    header h1 {
        font-size: 1.2em;
        text-align: center;
    }

    main {
        margin-top: 3.5em;
    }

    .normal {
        display: inline-block;
        border-radius: 25px;
        height: 2px;
        width: 2em;
        padding: 2px;
        border: solid 1px #FFD460;
        background: #FFD460;
        margin-inline-end: 0.5em;
    }

    .bad {
        display: inline-block;
        border-radius: 25px;
        height: 2px;
        width: 2em;
        padding: 2px;
        border: solid 1px grey;
        background: grey;
        margin-inline-start: 1em;
        margin-inline-end: 0.5em;
    }

    .tip {
        border-radius: 1.4em;
        background: #FFFFFF;
        padding: 0.5em 1.4em;
        text-align: center;

        font-weight: 600;
    }

    #finedustWarning {
        padding: 1em 1.4em;
        background: #F05F3F;
    }
    
    #finedustWarning a {
        color: #FFFFFF;
        text-decoration: none;
    }

    #calendar {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 1em;
        --fds-control-corner-radius: 1.4em;
        --fds-font-family-text: "Pretendard Variable", sans-serif;
        --fds-accent-default: #FFD460;
    }

</style>