import { error } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, url, fetch }) {
    const car = getDataFromOrigin("car", cookies, url.searchParams);
    const name = getDataFromOrigin("name", cookies, url.searchParams);

    const userData = await fetch(`https://api.dustdrive.info/api/v1/car/check`, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: `{
            "carNumber": "${car}",
            "userName": "${name}"
        }`
    });
    const user = await userData.json();

    if (user.status && user.status !== 200) {
        throw error(500, "서버 오류로 데이터를 가져오지 못했습니다.");
    } else {
        return {
            car: user.carNum,
            carModel: user.carType,
            name: user.userName,
            year: user.year,
            rank: user.fuelEffRank
        };    
    }
}

function getDataFromOrigin(property, cookie, query) {
    if (cookie.get(property)) {
        return cookie.get(property);
    } else if (query.get(property)) {
        cookie.set(property, query.get(property));
        return query.get(property);
    } else {
        throw error(400, "잘못된 입력값이 전달되었습니다.");
    }
}