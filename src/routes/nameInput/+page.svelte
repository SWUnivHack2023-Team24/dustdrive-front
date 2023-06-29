<script>
    import { fade } from "svelte/transition";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Yellow Calendar: 이름을 입력해주세요</title>
</svelte:head>

<main in:fade>
    <p>차주 분의 성함을 입력해주세요 :&#41;</p>
    <form method="POST">
        <input type="hidden" name="car" value={data.car} />
        <input type="text" name="name" autofocus />
        <input type="submit" value="정보 확인하기" />
    </form>
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

    section p {
        text-align: center;
    }

    form {
        display: grid;
        gap: 1em;
    }

    input {
        text-align: center;
    }
</style>