import s from "./SecondPage.module.css";
const SecondPage = ({
    state2,
    translationsState2,
    setWrittenTexts2,
    getTextFromInput,
    writtenTexts2,
    checkWord2,
    setCheckWord2,
    setTranslationsState2,
    showTrueEnglishVariant,
    colorsWord,
    color,
    setColor,
}) => {
    return (
        <>
            <main>
                {state2.map((el, index) => (
                    <div
                        key={index}
                        className="container-element"
                    >
                        <li
                            className={
                                translationsState2[index]
                                    ? "display-none"
                                    : color[index]
                            }
                        >
                            {el.firstWord}
                        </li>
                        <li
                            className={
                                !translationsState2[index]
                                    ? "display-none"
                                    : "first-word-item"
                            }
                        >
                            {state2[index].lastWord}
                        </li>
                        <button
                            onClick={() =>
                                showTrueEnglishVariant(
                                    setTranslationsState2,
                                    index
                                )
                            }
                        >
                            check
                        </button>
                        <input
                            className={checkWord2[index] ? "green" : "red"}
                            type="text"
                            onChange={(e) => {
                                getTextFromInput(
                                    state2,
                                    e.target.value,
                                    index,
                                    setWrittenTexts2,
                                    setCheckWord2
                                );
                                colorsWord(
                                    e.target.value,
                                    el.lastWord,
                                    setColor,
                                    index
                                );
                            }}
                            value={writtenTexts2[index] || ""}
                        />
                    </div>
                ))}
            </main>
        </>
    );
};

export default SecondPage;
