export function getValueSearchInput(value, state, mainState) {
    let filterArray = mainState.filter((el) => {
        if (el.firstWord.includes(value) || el.lastWord.includes(value)) {
            return true;
        }
    });
    state(filterArray);
}
