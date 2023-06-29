<script>
    import { swipe } from "svelte-gestures";
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import Indicator from "../components/Indicator.svelte";

    const messages = [
        {
            header: ["오랜시간 함께한", "나의 경유차를 타고"] 
        },
        {
            header: "내가 원하는 날짜에, 원하는 지역으로"
        },
        {
            header: "제약없이 자유롭게!"
        }
    ];
    let splashStep = undefined;
    let currentIndex = 0

    function isFirstIndex(currentIndex) {
        if (currentIndex !== 0) {
            return false;
        } else {
            return true;
        }
    }

    function isLastIndex(currentIndex, contents) {
        if (currentIndex + 1 !== contents.length) {
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
            if (!isLastIndex(currentIndex, messages)) {
                currentIndex++;
            } else {
                goto("carNumberInput");  
            }
        }
    }

    
</script>

<svelte:head>
    <title>Yellow Calendar: 환영합니다</title>
</svelte:head>

<main use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={afterSwiped}>
    {#key currentIndex}
    <section bind:this={splashStep} class="showElement" in:fade>
        <h2>
            {#if typeof messages[currentIndex].header === "object"}
                {#each messages[currentIndex].header as text}
                    {text}<br>
                {/each}
            {:else}
                {messages[currentIndex].header}    
            {/if}
        </h2>
    </section>
    <Indicator indicateLength={messages.length} currentDot={currentIndex} />
    {/key}
</main>

<style>
    main {
        font-family: "Pretendard Variable", sans-serif;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }

    h2 {
        height: 3em;
    }
</style>