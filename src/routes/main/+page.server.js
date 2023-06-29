/** @type {import('./$types').Actions} */
export const actions = {
    default: ({ cookies, request }) => getData(cookies, request)
}

async function getData(request) {
    const formData = await request.formData();

    const car = getDataFromOrigin("car", formData);
    const name = getDataFromOrigin("name", formData);

    if (car && name) {
        cookies.set("car", formData.get(car));
        cookies.set("name", formData.get(name));

        return {
            car: car,
            name: name
        };            
    } else {
        return null;
    }
}

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const car = getDataFromOrigin("car", cookies);
    const name = getDataFromOrigin("name", cookies);

    return {
        car: car,
        name: name
    };
}

function getDataFromOrigin(property, origin) {
    if (origin.get(property)) {
        return origin.get(property);
    } else {
        return undefined;
    }
}