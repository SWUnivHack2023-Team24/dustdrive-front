/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, fetch }) {
    const car = cookies.get("car");
    const name = cookies.get("name");
    const grade = undefined;

    return {
        car: car,
        name: name,
        grade: grade
    };
}