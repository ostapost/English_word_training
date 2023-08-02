// export const URL = "https://64be99005ee688b6250cadd9.mockapi.io/words";
export const URL = "https://64be99005ee688b6250cadd9.mockapi.io/words2";
export async function getApi(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}
