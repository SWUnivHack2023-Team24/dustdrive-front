/** @type {import('./$types').PageLoad} */
export function load({ url }) {
    const carNumber = url.searchParams.get("car");

    return {
        car: carNumber
    };
}