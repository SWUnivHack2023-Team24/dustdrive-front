<script>
    /** @type {import('./$types').Actionstorage} */
    export let form;

    /** @type {import('./$types').PageServerData} */
    export let data;

    let storage = form ? form : data;
</script>

<header>
    <h1>YELLOW CALENDAR</h1>
    <ul>
        <li>
            <a href="#">notifications</a>
        </li>
        <li>
            <a href="#">menu</a>
        </li>
</header>

<svelte:head>
    <title>Yellow Calendar: 홈</title>
</svelte:head>

<main>
    <section id="carInfo">
        <h2>
            <span class="name">{storage.name}</span> 님의 <span class="primary">옐로카</span>
        </h2>
        <div class="carNumber">
            {storage.car}
        </div>
        <ul>
            <li><span class="carInfoCategory">모델명</span> {storage.model}</li>
            <li><span class="carInfoCategory">연식</span> {storage.year}</li>
            <li><span class="carInfoCategory">디젤</span> {storage.engine}</li>
        </ul>
    </section>
    <section id="myYelloCar">
        <h2>마이 옐로카 등급</h2>
        <p>2등급<span>안전 등급입니다 :&#41;</span></p>
    </section>
    <section id="operateInfo">
        <a href="">
            운행 가능일 확인하기
            <span></span>
        </a>
        <a href="">
            마이 옐로카 운행 제한 조건 확인하러 가기
            <span></span>
        </a>
    </section>
</main>

<style>
    
</style>