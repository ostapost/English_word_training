export function sortState(sort, state, setstate, setSelectedSort) {
    setSelectedSort(sort);
    console.log(sort);
    setstate([...state].sort((a, b) => a[sort].localeCompare(b[sort])));
}
