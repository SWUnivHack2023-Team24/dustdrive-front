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
                        YELLOW calendar
                        위치 정보 제공 동의
                        제 1 조 (목적)

                        본 약관은 주식회사 옐로우캘린더(이하 "회사")가 제공하는 사물 위치정보 및 위치기반 서비스(이하, 위치정보 서비스)에 대해 회사와 서비스를 이용하는 이용자간의 권리·의무 및 책임사항, 기타 필요한 사항 규정을 목적으로 합니다.


                        제 2 조 (이용약관의 효력 및 변경)

                        ① 본 약관은 이용자가 본 약관에 동의하고 회사가 정한절차에 따라 위치정보 서비스의 이용자로 등록됨으로
                            써 효력이 발생합니다.

                        ② 이용자가 본 약관의 “동의하기” 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로 봅니다.

                        ③ 회사는 위치정보 서비스의 변경사항을 반영하기 위한 목적 등으로 필요한 경우 관련 법령을 위배하지 않는 범
                            위에서 본 약관을 수정할 수 있습니다.

                        ④ 약관이 변경되는 경우 회사는 변경사항을 그 적용일자 최소 15일 전에 회사의 홈페이지 또는 서비스 공지사항
                            등(이하, 홈페이지 등)을 통해 공지합니다. 다만, 개정되는 내용이 이용자 권리의 중대한 변경을 발생시키는 경우 적용일 최소 30일 전에 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 등록한 휴대폰번호로 카카오톡 메시지 또는 문자메시지를 발송하는 방법 등으로 개별적으로 고지합니다.

                        ⑤ 회사가 전항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 이용자의 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 이용자가 개정약관에 동의하지 않을 경우 본 약관에 대한 동의를 철회할 수 있습니다.
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
                        2. 개인정보 수집
                        서비스 제공을 위한 필요 최소한의 개인정보를 수집합니다.
                        회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 개별 어플리케이션이나 프로그램 등을 통해 서비스 제공을 위해 필요 최소한의 개인정보를 수집하고 있습니다.
                        [옐로우캘린더 계정 가입 시]
                        필수
                        이메일, 비밀번호, 이름(닉네임), 프로필사진, 친구목록, 카카오톡 전화번호(카카오톡 이용자의 경우에 한함), 연락처, 서비스 이용내역, 서비스 내 구매 및 결제 내역
                        선택
                        생년월일, 성별, 배송지정보(수령인명, 배송지주소, 전화번호)
                        [사업자/단체 옐로우캘린더 계정 가입 시]
                        필수
                        이메일, 비밀번호, 사업자/단체명, 프로필사진, 친구목록, 연락처, 서비스 이용내역, 서비스 내 구매 및 결제 내역, 담당자 본인 인증정보 (이름, 생년월일, 성별, 아이디, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI), 내/외국인 여부), 담당자 연락처(이메일 주소, 휴대전화번호)
                        일부 서비스에서는 특화된 여러 기능을 제공하기 위해 이용자에게 동의를 받고 추가적인 개인정보를 수집할 수 있습니다.
                        필수정보란? : 해당 서비스의 본질적 기능을 수행하기 위한 정보
                        선택정보란? : 보다 특화된 서비스를 제공하기 위해 추가 수집하는 정보 (선택 정보를 입력하지 않은 경우에도 서비스 이용 제한은 없습니다.)
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
        align-items:last baseline;
    }

    main {
        font-family: "Pretendard Variable", sans-serif;
        height: 60vh;
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