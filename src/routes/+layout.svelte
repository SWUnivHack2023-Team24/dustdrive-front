<script>
    import { navigating } from "$app/stores";
</script>

<slot></slot>

{#if $navigating}
<dialog open>
    <p>
        <span class="secondary">옐로우캘린더</span>가<br>
        <span class="primary">MY 옐로카 정보</span>를<br>
        확인하고 있어요</p>
    <div class="loadingCircle" />
</dialog>
{/if}

<style>
    dialog {
        font-weight: 700;
        font-size: 1.5em;

        top: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: none;

        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    dialog p {
        text-align: center;
    }

    .loadingCircle {
        border: 2.5px solid #f3f3f3; /* Light grey */
        border-top: 2.5px solid #FFD460;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
    }

    .primary {
        color: #FFD460;
    }

    .secondary {
        color: #F07B3F;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>