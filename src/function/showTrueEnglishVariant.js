export function showTrueEnglishVariant(tranc, index) {
    tranc((prevTranslationsState) => ({
        ...prevTranslationsState,
        [index]: !prevTranslationsState[index], // Переключаємо стан показу англійського перекладу для конкретного елементу
    }));
}
