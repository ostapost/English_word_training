export function getTextFromInput(thisState, text, index, whearSave, checkFun) {
    whearSave((prevTexts) => {
        const updatedTexts = [...prevTexts];
        updatedTexts[index] = text;
        return updatedTexts;
    });

    const isCorrect =
        thisState[index].lastWord.toLowerCase() === text.toLowerCase();

    checkFun((prevCheck) => {
        const updatedCheck = [...prevCheck];
        updatedCheck[index] = isCorrect;
        return updatedCheck;
    });
}
