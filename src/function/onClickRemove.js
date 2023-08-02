export function onClickRemove(_id, state, setState) {
    let filterCratedArray = state.filter((el) => el.id !== _id);

    setState(filterCratedArray);
    console.log("remove");
}

export function onClickRemoveAndAdd(
    _id,
    state,
    setstate,
    element,
    hardState,
    setHardState
) {
    let newHardElems = [...hardState, element];
    setHardState(newHardElems);

    let filterCratedArray = state.filter((el) => el.id !== _id);

    setstate(filterCratedArray);
}

export function addtoPage(element, hardState, setHardState) {
    if (hardState.length === 0) {
        let newHardElems = [...hardState, element];
        setHardState(newHardElems);
    } else {
        let isElementPresent = hardState.some((el) => el.id === element.id);
        console.log(isElementPresent);
        if (!isElementPresent) {
            let newHardElems = [...hardState, element];
            setHardState(newHardElems);
        }
    }
}
