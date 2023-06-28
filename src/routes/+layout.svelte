<script>
    const currentYear = new Date().getFullYear();
</script>

<header>
    <h1>Yellow Calendar</h1>
</header>

<slot></slot>

<footer>
    <p>Copyright by {currentYear} DustDrive Team</p>
</footer>

<style>
    header, footer {
        font-family: "Pretendard Variable", sans-serif;
        text-align: center;
    }

    header {
        height: 5vh;
    }

    footer {
        height: 5vh;
        width: 100%;
        bottom: 0;
        position: fixed;
    }
</style>