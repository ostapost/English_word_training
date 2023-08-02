import s from "./MainPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const MainPage = ({
    state,
    setState,
    checkWord,
    getTextFromInput,
    writtenTexts,
    translationsState,
    showTrueEnglishVariant,
    setWrittenTexts,
    setCheckWord,
    setTranslationsState,
    wordToUpperCase,
    onClickRemove,
    colorsWord,
    color,
    setColor,
}) => {
    let a = "yellow";
    return (
        <>
            <main>
                <div className="main">
                    {state.map((el, index) => (
                        <div
                            key={index}
                            className="container-element"
                        >
                            <li
                                className={
                                    translationsState[index]
                                        ? "display-none"
                                        : color[index]
                                }
                            >
                                {wordToUpperCase(el.firstWord)}
                            </li>
                            <li
                                className={
                                    !translationsState[index]
                                        ? "display-none"
                                        : "first-word-item"
                                }
                            >
                                {wordToUpperCase(el.lastWord)}
                            </li>
                            <button
                                className={s.check}
                                onClick={() =>
                                    showTrueEnglishVariant(
                                        setTranslationsState,
                                        index
                                    )
                                }
                            >
                                <FontAwesomeIcon
                                    style={{
                                        fontSize: "18px",
                                        color: "rgba(255, 255, 255, 0.704)",
                                    }}
                                    icon={faArrowsRotate}
                                />
                            </button>
                            <input
                                className={
                                    checkWord[index]
                                        ? `${s.input_green}`
                                        : `${s.input_red}`
                                }
                                type="text"
                                onChange={(e) => {
                                    getTextFromInput(
                                        state,
                                        e.target.value,
                                        index,
                                        setWrittenTexts,
                                        setCheckWord
                                    );
                                    colorsWord(
                                        e.target.value,
                                        el.lastWord,
                                        setColor,
                                        index
                                    );
                                }}
                                value={writtenTexts[index] || ""}
                            />
                            <button
                                className={s.btn_x}
                                onClick={() =>
                                    onClickRemove(el.id, state, setState)
                                }
                            >
                                <FontAwesomeIcon
                                    style={{
                                        fontSize: "17px",
                                        color: "rgba(255, 255, 255, 0.704)",
                                    }}
                                    icon={faTrash}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};
