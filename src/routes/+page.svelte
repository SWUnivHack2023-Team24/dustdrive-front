<script>
    import { swipe } from "svelte-gestures";
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import Indicator from "../components/Indicator.svelte";

    let currentIndex = 0
    const splashes = 3;

    function isFirstIndex(currentIndex) {
        if (currentIndex !== 0) {
            return false;
        } else {
            return true;
        }
    }

    function isLastIndex(currentIndex, contentLength) {
        if (currentIndex + 1 !== contentLength) {
            return false
        } else {
            return true;
        }
    }

    function afterSwiped(event) {
        if (event.detail.direction === "right") {
            if (!isFirstIndex(currentIndex)) {
                currentIndex--;
            }
        } else if (event.detail.direction === "left") {
            if (!isLastIndex(currentIndex - 1, splashes)) {
                currentIndex++;
            } else {
                goto("carNumberInput");  
            }
        }
    }

    
</script>

<svelte:head>
    <title>Yellow Calendar: 어서오세요</title>
</svelte:head>

<main use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={afterSwiped}>
    {#key currentIndex}
    <section id="splash" in:fade>
        {#if currentIndex === 0}
        <p class="titleDesc">노후 경유차 케어 서비스</p>
        <h1>YELLOW<br>CALENDAR</h1>
        <div class="description">
            <p>차량을 등록하면<br>내 차의 운행가능여부를 확인할 수 있어요.</p>
            <p>나의 오래된 차의 정보를 확인하고<br>언제 어디서든 케어할 수 있도록 도와드릴게요.</p>
        </div>
        {:else}
            <h2>
            {#if currentIndex === 1}
                <span class="secondary">오랜시간 함께한</span>
                <br>
                나의
                <span class="primary">경유차</span>를 타고
            {:else if currentIndex === 2}
                내가
                <span class="secondary">원하는 날짜</span>에, 
                <span class="secondary">원하는 지역</span>으로
            {:else if currentIndex === 3}
                제약없이
                <span class="pointBlue">자유롭게</span>&nbsp;-&nbsp;!
            {/if}
            </h2>
        {/if}
    </section>
    {#if currentIndex !== 0}
    <Indicator indicateLength={splashes} currentDot={currentIndex -1} />
    {/if}
    {/key}
</main>

<style>
    main {
        font-family: "Pretendard Variable", sans-serif;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    h1 {
        color: #FFD460;
        font-size: 2.5em;
        margin: 0;
    }

    h2 {
        height: 3em;
    }

    .primary {
        color: #FFD460;
    }

    .secondary {
        color: #F07B3F;
    }

    .pointBlue {
        color: #1A68FF;
    }

    .titleDesc {
        margin: 0;
    }

    .description {
        color: #A4A4A4;
        margin-top: 7em;
    }

    #splash {
        text-align: center;
    }
</style>