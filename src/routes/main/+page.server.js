/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, url }) {
    const car = getDataFromOrigin("car", cookies, url.searchParams);
    const name = getDataFromOrigin("name", cookies, url.searchParams);

    return {
        car: car,
        name: name
    };
}

function getDataFromOrigin(property, cookie, query) {
    if (cookie.get(property)) {
        return cookie.get(property);
    } else if (query.get(property)) {
        cookie.set(property, query.get(property));
        return query.get(property);
    } else {
        return undefined;
    }
}