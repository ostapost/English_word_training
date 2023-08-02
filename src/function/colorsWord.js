export function colorsWord(value, currentWord, stateColor, index) {
    if (currentWord.trim().toLowerCase() === value.trim().toLowerCase()) {
        stateColor((prev) => ({ ...prev, [index]: "color3" }));
    } else if (
        currentWord.trim().substring(0, 1).toLowerCase() ===
        value.trim().toLowerCase()
    ) {
        stateColor((prev) => ({ ...prev, [index]: "color2" }));
    } else if (
        currentWord.trim().substring(0, 2).toLowerCase() ===
        value.trim().toLowerCase()
    ) {
        stateColor((prev) => ({ ...prev, [index]: "color1" }));
    } else if (
        currentWord.trim().substring(0, 3).toLowerCase() ===
        value.trim().toLowerCase()
    ) {
        stateColor((prev) => ({ ...prev, [index]: "color1" }));
    } else if (
        currentWord.trim().substring(0, 4).toLowerCase() ===
        value.trim().toLowerCase()
    ) {
        stateColor((prev) => ({ ...prev, [index]: "color1" }));
    } else if (
        currentWord.trim().substring(0, 5).toLowerCase() ===
        value.trim().toLowerCase()
    ) {
        stateColor((prev) => ({ ...prev, [index]: "color1" }));
    } else if (
        currentWord.trim().substring(0, 6).toLowerCase() ===
        value.trim().toLowerCase()
    ) {
        stateColor((prev) => ({ ...prev, [index]: "color1" }));
    } else {
        stateColor((prev) => ({ ...prev, [index]: "color4" }));
    }
}
