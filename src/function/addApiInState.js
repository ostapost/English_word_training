import { getApi } from "../api-worlds/api";

export async function addApiInState(url, save, hide, color) {
    let wordsArray = await getApi(url);
    save(wordsArray);
    const initialState = {};
    const initialColorState = [];

    wordsArray.forEach((el, index) => {
        initialState[index] = false;
        initialColorState[index] = "first-word-item ";
    });
    hide(initialState);
    color(initialColorState);
}
