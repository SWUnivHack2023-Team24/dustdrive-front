import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
    const car = cookies.get("car") ?? undefined;
    const name = cookies.get("name") ?? undefined;

    if (car && name) {
        throw redirect(302, "/main");
    }
}