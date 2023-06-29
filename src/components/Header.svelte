<script>
    export let headerTitle = undefined;
    export let backMenu = "/main";
</script>

<header>
    <a href={backMenu}>
        <img src="/icons/goPreviousBlack.svg" alt="back button">
    </a>
    <h1>{headerTitle}</h1>
</header>

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
</style>