import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }) {
    const region = url.searchParams.get("region") ?? "충청남도 천안시";
    const current = new Date();
    const requestList = [
        `${current.getFullYear()}-${(current.getMonth() < 9) ? "0" : ""}${current.getMonth()}`,
        `${current.getFullYear()}-${(current.getMonth() < 9) ? "0" : ""}${current.getMonth() + 1}`,

        `${current.getFullYear()}-${(current.getMonth() < 9) ? "0" : ""}${current.getMonth() + 2}`
    ];
    
    return {
        dusts: await Promise.all(requestList.map(async quest => {
            const task = await fetch(`https://api.dustdrive.info/api/v1/dust`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: `{
                    "region": "${region}",
                    "date": "${quest}"
                }`
            });
    
            return task.json();
        }))
    };
}