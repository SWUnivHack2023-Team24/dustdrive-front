import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export function load({ cookies, url }) {
    const demo = url.searchParams.get("demo");
    const car = cookies.get("car") ?? undefined;
    const name = cookies.get("name") ?? undefined;

    if (car && name) {
        throw redirect(302, "/main");
    } else if (demo === "true") {
        cookies.set("car", "69러7299");
        cookies.set("name", "최현후");
        throw redirect(302, "/main");
    }
}