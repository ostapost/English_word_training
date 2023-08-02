export function getStoredState(text) {
    let storeState = localStorage.getItem(text);
    return storeState ? JSON.parse(storeState) : [];
}
