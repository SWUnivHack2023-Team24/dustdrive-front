<script>
    import { navigating } from "$app/stores";

    const currentYear = new Date().getFullYear();
</script>

<slot></slot>

{#if $navigating}
<dialog open>
    <p>
        <span class="primary">옐로우캘린더</span>가
        <span class="secondary">옐로카</span> 정보를 확인하고 있어요</p>
    <div class="loadingCircle" />
</dialog>
{/if}

<style>
    dialog {
        position: fixed;
        top: 10vh;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: none;
    }

    .loadingCircle {
        border: 2.5px solid #f3f3f3; /* Light grey */
        border-top: 2.5px solid yellow;
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