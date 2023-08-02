import { v1 } from "uuid";
export function onClickSubmitCreateDiv(
    firstWord,
    lastWord,
    setFirstWord,
    setLastWord,
    setMainArrayCreatedWords,
    mainArrayCreatedWords,
    setErrorTrimWord,
    setAllstate,
    allstate
) {
    if (lastWord.trim() !== "" && firstWord.trim() !== "") {
        let newObject = { id: v1(), firstWord: firstWord, lastWord: lastWord };
        let newObjects = [...mainArrayCreatedWords, newObject];
        let newObjectsAll = [...allstate, newObject];

        setAllstate(newObjectsAll);

        setMainArrayCreatedWords(newObjects);
        setFirstWord("");
        setLastWord("");
        setErrorTrimWord("");
    } else if (lastWord.trim() === "" && firstWord.trim() === "") {
        setErrorTrimWord("two");
        console.log("two");
    } else if (lastWord.trim() === "") {
        console.log("друге");
        setErrorTrimWord("last");
    } else if (firstWord.trim() === "") {
        console.log("перше");
        setErrorTrimWord("first");
    }
}
export function getFirstWordInput(word, state) {
    state(word);
    return word;
}
export function getLastWordInput(word, state) {
    state(word);
    return word;
}

export function checkTrimWord(firstWord, lastWord) {
    // console.log(firstWord);
    // console.log(lastWord);
}
