<script>
    export let indicateLength = 0;
    export let currentDot = 0;

    const indicatorDot = Array.from(Array(indicateLength));
    let dotIndex = 0

    function indicateCurrentDot() {
        dotIndex++;
        if (dotIndex -1 === currentDot) {
            return "current";
        } else {
            return "";
        }
    }
</script>

<p>
    {#each indicatorDot as dot}
    <span class={indicateCurrentDot()} />
    {/each}
</p>

<style>
    p {
        text-align: center;
    }

    span {
        display: inline-block;
        border-radius: 50%;
        height: 2px;
        width: 2px;
        padding: 2px;
        border: solid 1px grey;
        background: grey;
        margin: 1em;
    }

    .current {
        background: #F07B3F;
        border: solid 1px #F07B3F;
    }
</style>