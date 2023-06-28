<script>
    import { fade } from "svelte/transition";
    import { goto } from "$app/navigation";

    let newCarOnlyField = undefined;
    let inputCarStep = undefined;
    let devideChar = undefined;
    let inputCarForm = undefined;

    function nextCarInput(event) {
        if (event.target.nextElementSibling.getAttribute("type") === "hidden") {
            devideChar.focus();
        } else {
            event.target.nextElementSibling.focus();
        }
    }

    function newCarSign(event) {
        if (Number(event.target.value)) {
            newCarOnlyField.setAttribute("type", "number");
            newCarOnlyField.value = Number(event.target.value);
            event.target.value = "";
        }
    }

    function oldCarSign(event) {
        if (!event.target.value) {
            event.target.setAttribute("type", "hidden");
            event.target.value = undefined;
            event.target.nextElementSibling.focus();
        }
    }

    function joinInputAndSend() {
        const numbersElement = Array.from(inputCarForm.elements);
        const numbersValue = [];

        numbersElement.forEach((element) => {
            if (element.value !== undefined) {
                numbersValue.push(element.value);
            }
        });
        
        goto(`./nameInput?car=${numbersValue.join("")}`);
    }
</script>
<main>
    <section bind:this={inputCarStep} in:fade>
        <p>노후 경유차, 아직 바꿀 수 없다면</p>
        <form bind:this={inputCarForm} class="inputCarForm" name="inputCar">
            <input name="carNumber" type="number" placeholder="1" maxlength="1" min="1" max="9" size="1" inputmode="numeric" on:input={nextCarInput} autofocus />
            <input name="carNumber" type="number" placeholder="2" maxlength="1" min="0" max="9" size="1" inputmode="numeric" on:input={nextCarInput} />
            <input bind:this={newCarOnlyField} name="carNumber" type="hidden" min="0" max="9" size="1" placeholder="3" value={undefined} maxlength="1" inputmode="numeric" on:input={oldCarSign} />
            <input bind:this={devideChar} name="carNumber" type="text" placeholder="가" size="1" maxlength="1" on:input={newCarSign} />
            <input name="carNumber" type="number" placeholder="5" maxlength="1" size="1" min="1" max="9" on:input={nextCarInput} inputmode="numeric" />
            <input name="carNumber" type="number" placeholder="6" maxlength="1" size="1" min="0" max="9" on:input={nextCarInput} inputmode="numeric" />
            <input name="carNumber" type="number" placeholder="7" maxlength="1" size="1" min="0" max="9" on:input={nextCarInput} inputmode="numeric" />
            <input name="carNumber" type="number" placeholder="8" maxlength="1" size="1" min="0" max="9" inputmode="numeric" on:input={joinInputAndSend}/>
        </form>
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