<script>
    import { fade } from "svelte/transition";
    import { goto } from "$app/navigation";

    const carType = ["가", "나", "다", "라", "마", "거", "너", "더", "러", "머", "버", "서", "어", "저", "고", "노", "도", "로", "모", "보", "소", "오", "조", "구", "누", "두", "루", "무", "부", "수", "우", "주", "아", "바", "사", "자", "배", "허", "하", "호"];
    let newCarOnlyField = undefined;
    let inputCarStep = undefined;
    let carTypeField = undefined;
    let inputCarForm = undefined;
    let carTypeCompleted = false;

    function nextCarInput(event) {
        if (event.target.nextElementSibling.getAttribute("type") === "hidden") {
            carTypeField.focus();
        } else {
            event.target.nextElementSibling.focus();
        }
    }

    function newCarSign(event) {
        if (Number(event.target.value)) {
            newCarOnlyField.setAttribute("type", "number");
            newCarOnlyField.value = Number(event.target.value);
            event.target.value = "";
        } else if (carType.includes(event.target.value) && !carTypeCompleted) {
            carTypeCompleted = true;
            event.target.nextElementSibling.focus();
        } else {
            carTypeCompleted = false;            
        }
    }

    function oldCarSign(event) {
        if (!event.target.value) {
            event.target.setAttribute("type", "hidden");
            event.target.value = "";
            event.target.nextElementSibling.focus();
        }
    }

    function joinInputAndSend() {
        const numbersElement = Array.from(inputCarForm.elements);
        const numbersValue = [];

        numbersElement.forEach((element) => {
            numbersValue.push(element.value);
        });
        
        goto(`./nameInput?car=${numbersValue.join("")}`);
    }
</script>
<svelte:head>
    <title>Yellow Calendar: 차량 번호 입력하기</title>
</svelte:head>


<main>
    <section bind:this={inputCarStep} in:fade>
        <p>노후 경유차, 아직 바꿀 수 없다면</p>
        <form bind:this={inputCarForm} class="inputCarForm" name="inputCar">
            <input name="carNumber" type="number" placeholder="1" maxlength="1" min="1" max="9" size="1" inputmode="numeric" on:input={nextCarInput} autofocus />
            <input name="carNumber" type="number" placeholder="2" maxlength="1" min="0" max="9" size="1" inputmode="numeric" on:input={nextCarInput} />
            <input bind:this={newCarOnlyField} name="carNumber" type="hidden" min="0" max="9" size="1" placeholder="3" maxlength="1" inputmode="numeric" on:input={oldCarSign} />
            <input bind:this={carTypeField} name="carNumber" type="text" placeholder="가" size="1" maxlength="1" on:input={newCarSign} />
            <input name="carNumber" type="number" placeholder="5" maxlength="1" size="1" min="1" max="9" on:input={nextCarInput} inputmode="numeric" />
            <input name="carNumber" type="number" placeholder="6" maxlength="1" size="1" min="0" max="9" on:input={nextCarInput} inputmode="numeric" />
            <input name="carNumber" type="number" placeholder="7" maxlength="1" size="1" min="0" max="9" on:input={nextCarInput} inputmode="numeric" />
            <input name="carNumber" type="number" placeholder="8" maxlength="1" size="1" min="0" max="9" inputmode="numeric" on:input={joinInputAndSend}/>
        </form>
        <p>차량 번호는 사용자 기기에만 저장되어요</p>
    </section>    
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

    .inputCarForm input {
        font-family: "Pretendard Variable", sans-serif;

        aspect-ratio: 1/2;
        border-radius: 10px;
        border: solid 1px gray;
        font-size: 2em;
        max-height: 2em;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>