<script>
    let locationAgreement = undefined;
    let privacyAgreement = undefined;
    let agreeLocationTitle = undefined;
    let agreeLocation = undefined;
    let agreePrivacy = undefined;
    let agreePrivacyTitle = undefined;

    let location = false;
    let privacy = false;

    function agreeToThis(event) {
        if (event.target.getAttribute("for") === "agreeLocation") {
            locationAgreement.removeAttribute("open");
            if (location) {
                location = false;
                agreeLocationTitle.style.color = "#000000";
                event.target.style.color = "#000000";
            } else {
                location = true;
                agreeLocationTitle.style.color = "#FFD460";
                event.target.style.color = "#FFD460";
            }
        } else if (event.target.getAttribute("for") === "agreePrivacy") {
            privacyAgreement.removeAttribute("open");
            if (privacy) {
                privacy = false;
                agreePrivacyTitle.style.color = "#000000";
                event.target.style.color = "#000000";
            } else {
                privacy = true;
                agreePrivacyTitle.style.color = "#FFD460"; 
                event.target.style.color = "#FFD460";
            }
        }
    }

    function agreeAll(event) {
        agreePrivacyTitle.style.color = "#FFD460";
        privacy = true;
        agreePrivacy.style.color = "#FFD460";

        agreeLocationTitle.style.color = "#FFD460";
        location = true;
        agreeLocation.style.color = "#FFD460";
    }
</script>

<svelte:head>
    <title>Yellow Calendar: 약관 동의하기</title>
</svelte:head>

<header>
    <h1>YELLOW CALENDAR</h1>
</header>

<main>
    <section>
        <details bind:this={locationAgreement}>
            <summary bind:this={agreeLocationTitle}>위치 정보 제공 동의 <span><img src="/icons/beforeOpen.svg" alt="graphic" /></span></summary>
            <div>
                <div class="agreement">
                    <p>
                        &lt;순천향대학교&gt;는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한
                        이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
                        
                        1. 개인정보의 처리 목적
                        
                         &lt;순천향대학교&gt;는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의
                        용도로는 사용되지 않으며 「개인정보 보호법」제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                        예정입니다.
                        
                          가. 회원 가입 및 관리
                            ◦ 회원제 서비스 이용에 따른 본인확인, 개인 식별, 회원의 부정이용 방지와 비인가 사용방지, 가입의사
                               확인, 분쟁 조정을 위한 기록 보존, 불만처리 등 민원처리, 고지사항 전달 등
                        
                          나. 입시 및 학사 업무 처리
                            ◦ 입시전형 업무, 신입생 선발, 학사관리 및 학교행정 업무, 외국인 유학생 관리 등
                        
                          다. 각종 서비스 제공 및 민원사무 처리
                            ◦ 장학금 업무, 도서 대출 반납 및 이용자 관리, 생활관생 관리, 수강생 학사 관리, 취업 지원, 보건관리,
                               학자금 대출, 장애학생 지원 등과 민원인의 신원 및 민원사항 확인, 처리결과 통보 등
                        
                          라. 발전기금 기탁자 관리
                            ◦ 발전기금 기탁자 관리 및 기부금 영수증 발급 등
                        
                          마. 연구관리
                            ◦ 국가연구개발사업의 관리 등
                        
                        2. 개인정보 파일 현황    
                    </p>  
                </div>
                <div class="agreeSlot">
                    <span for="agreeLocation" bind:this={agreeLocation} on:click={agreeToThis}>동의하기</span>    
                </div>
            </div>
        </details>
        <details bind:this={privacyAgreement}>
            <summary bind:this={agreePrivacyTitle}>개인정보 처리방침 <span><img src="/icons/beforeOpen.svg" alt="graphic" /></span></summary>
            <div>
                <div class="agreement">
                    <p>
                        &lt;순천향대학교&gt;는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한
                        이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
                        
                        1. 개인정보의 처리 목적
                        
                         &lt;순천향대학교&gt;는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의
                        용도로는 사용되지 않으며 「개인정보 보호법」제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                        예정입니다.
                        
                          가. 회원 가입 및 관리
                            ◦ 회원제 서비스 이용에 따른 본인확인, 개인 식별, 회원의 부정이용 방지와 비인가 사용방지, 가입의사
                               확인, 분쟁 조정을 위한 기록 보존, 불만처리 등 민원처리, 고지사항 전달 등
                        
                          나. 입시 및 학사 업무 처리
                            ◦ 입시전형 업무, 신입생 선발, 학사관리 및 학교행정 업무, 외국인 유학생 관리 등
                        
                          다. 각종 서비스 제공 및 민원사무 처리
                            ◦ 장학금 업무, 도서 대출 반납 및 이용자 관리, 생활관생 관리, 수강생 학사 관리, 취업 지원, 보건관리,
                               학자금 대출, 장애학생 지원 등과 민원인의 신원 및 민원사항 확인, 처리결과 통보 등
                        
                          라. 발전기금 기탁자 관리
                            ◦ 발전기금 기탁자 관리 및 기부금 영수증 발급 등
                        
                          마. 연구관리
                            ◦ 국가연구개발사업의 관리 등
                        
                        2. 개인정보 파일 현황    
                    </p>    
                </div>
                <div class="agreeSlot">
                    <span for="agreePrivacy" bind:this={agreePrivacy} on:click={agreeToThis}>동의하기</span>
                </div>    
            </div>
        </details>
    </section>
</main>

<footer>
    {#if location && privacy}
        <a href="/carNumberInput" class="afterAgreeButton">다음 단계 <img src="/icons/goNext.svg" alt="graphic"></a>
    {:else}
        <a on:click={agreeAll} class="agreeButton">모두 동의</a>
    {/if}
</footer>


<style>
    header, footer {
        display: flex;
        justify-content: center;
        height: 12vh;
    }
    
    header {
        margin-top: 6em;
    }

    footer {
        align-items: center;
    }

    main {
        font-family: "Pretendard Variable", sans-serif;
        height: 65vh;
    }

    section {
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 1.4em;
    }

    h1 {
        color: #FFD460;
        font-weight: 700;
    }

    details {
        border-radius: 1.4em;
        width: 20em;
        max-height: 20em;
        padding: 1.8em;
        margin: 0.5em;
        background: #F8F8F8;
    }

    details[open] summary {
        border-bottom: solid 2px #FFD460;
        padding-bottom: 0.5em;
    }

    summary {
        font-weight: 700;

        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    summary span {
        display: inline-block;
        text-align: end;
    }

    input[type='checkbox'] {
        visibility: hidden;
        text-align: center;
    }

    label {
        padding: 1em 1em 1em 0;
        font-size: 1.25em;
        font-weight: 700;
    }

    .agreement p {
        text-align: start;
        white-space: pre-line;
        word-wrap: break-word;
        margin: 0.5em;
    }

    .agreement {
        overflow-y: scroll;
        max-width: 100%;
        max-height: 15em;

        border-radius: 1.4em;
        margin-top: 1em;
    }

    .agreeSlot {
        margin-top: 1.25em;
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .agreeSlot span {
        font-weight: 700;
    }

    .agreeButton {
        font-weight: 700;

        background: #E2E2E2;
        color: #FFFFFF;
        border-radius: 2em;
        text-align: center;
        text-decoration: none;

        width: 20em;
        height: fit-content;
        padding: 0.7em 2em;
    }

    .afterAgreeButton {
        font-weight: 700;
        
        background: #FFD460;
        color: #FFFFFF;
        border-radius: 2em;
        text-decoration: none;

        width: 20em;
        height: fit-content;
        padding: 0.7em 2em;

        display: flex;
        justify-content: center;
    }

    .afterAgreeButton img {
        margin-inline-start: 0.75em;
    }
</style>