<script>
    import { fade } from "svelte/transition";

    /** @type {import('./$types').PageData} */
    export let data;

    function fieldFocusOut(event) {
        if (event.target.value !== "")
            event.target.setAttribute("style", "background: #FFD460;");
        else
            event.target.removeAttribute("style");
    }
</script>

<svelte:head>
    <title>Yellow Calendar: 이름을 입력해주세요</title>
</svelte:head>

<main in:fade>
    <form method="GET" action="/main">
        <input type="hidden" name="car" value={data.car} />
        <p></p>
        <div id="inputName">
            <p>차주 분의 성함을 입력해주세요 :&#41;</p>
            <input type="text" name="name" autofocus on:focusout={fieldFocusOut}/>
        </div>
        <input type="submit" class="bottom" value="마이 옐로카 정보 확인하러 가기" />
    </form>
</main>

<style>
    main {
        font-family: "Pretendard Variable", sans-serif;
        font-weight: 600;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form p {
        text-align: center;
        margin-bottom: 3em;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1em;
        height: 100vh;
    }

    form div {
        text-align: center;
    }

    input {
        font-family: "Pretendard Variable", sans-serif;
        font-weight: 600;
        
        text-align: center;
        border: none;
        background: #FFD460;
    }

    input[type='text'] {
        border-radius: 1.25em;
        width: 9em;
        padding: 1.25em 0.75em;
        font-size: 1em;
        background: #E8E8E8;
    }

    .bottom {
        margin-bottom: 3em;
        border-radius: 2em;
        padding: 0.5em 1.5em;

        font-size: 1.25em;
    }
</style>