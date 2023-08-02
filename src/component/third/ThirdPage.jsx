import { useState } from "react";
import s from "./ThirdPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ThirdPage = ({
    checkWord3,
    getTextFromInput,
    writtenTexts3,
    translationsState3,
    showTrueEnglishVariant,
    setWrittenTexts3,
    setCheckWord3,
    setTranslationsState3,
    wordToUpperCase,
    // ==========Create page State==============
    setMainArrayCreatedWords,
    mainArrayCreatedWords,
    setLastWord,
    lastWord,
    setFirstWord,
    firstWord,
    // ========================================
    onClickSubmitCreateDiv,
    getFirstWordInput,
    getLastWordInput,
    onClickRemove,
    onClickRemoveAndAdd,
    // =============================
    hardState,
    setHardState,

    colorsWord,
    color,
    setColor,
    checkTrimWord,
    // ==============================
    setErrorTrimWord,
    errorTrimWord,
    setAllstate,
    allstate,
}) => {
    return (
        <div
            className={s.create_container}
            style={{ display: "flex", justifyContent: "space-between" }}
        >
            <main>
                <div className="main">
                    <div className="hyunia">
                        {mainArrayCreatedWords.map((el, index) => (
                            <div
                                key={index}
                                className="container-element"
                            >
                                {/* <div className="width_600-1"> */}
                                <li
                                    className={
                                        translationsState3[index]
                                            ? "display-none"
                                            : color[index]
                                    }
                                >
                                    {wordToUpperCase(el.firstWord)}
                                </li>
                                <li
                                    className={
                                        !translationsState3[index]
                                            ? "display-none"
                                            : "first-word-item"
                                    }
                                >
                                    {wordToUpperCase(
                                        mainArrayCreatedWords[index].lastWord
                                    )}
                                </li>
                                <button
                                    className={s.check}
                                    onClick={() =>
                                        showTrueEnglishVariant(
                                            setTranslationsState3,
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
                                {/* </div> */}

                                {/* <div className="width_600-2"> */}
                                <input
                                    className={
                                        checkWord3[index]
                                            ? `${s.input_green}`
                                            : `${s.input_red}`
                                    }
                                    type="text"
                                    onChange={(e) => {
                                        getTextFromInput(
                                            mainArrayCreatedWords,
                                            e.target.value,
                                            index,
                                            setWrittenTexts3,
                                            setCheckWord3
                                        );
                                        colorsWord(
                                            e.target.value,
                                            el.lastWord,
                                            setColor,
                                            index
                                        );
                                    }}
                                    value={writtenTexts3[index] || ""}
                                />
                                <div className="width_600-2_btns"></div>
                                <button
                                    className={s.btn_x}
                                    onClick={() =>
                                        onClickRemove(
                                            el.id,
                                            mainArrayCreatedWords,
                                            setMainArrayCreatedWords
                                        )
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
                                <button
                                    className={s.to_other_state}
                                    onClick={() =>
                                        onClickRemoveAndAdd(
                                            el.id,
                                            mainArrayCreatedWords,
                                            setMainArrayCreatedWords,
                                            el,
                                            hardState,
                                            setHardState
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        style={{
                                            fontSize: "17px",
                                            color: "rgba(255, 255, 255, 0.704)",
                                        }}
                                        icon={faReplyAll}
                                        flip="horizontal"
                                    />
                                </button>
                            </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </main>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <p className={s.text_abow_creatre}>Поле для вводу слів</p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="input-and-button">
                            <div className="create_input">
                                <input
                                    className={`${s.create_input} ${
                                        errorTrimWord === "first" ||
                                        errorTrimWord === "two"
                                            ? `${s.inputError}`
                                            : " "
                                    }`}
                                    placeholder="English..."
                                    value={firstWord}
                                    onInput={(e) =>
                                        getFirstWordInput(
                                            e.target.value,
                                            setFirstWord
                                        )
                                    }
                                    type="text"
                                />

                                <input
                                    className={`${s.create_input} ${
                                        errorTrimWord === "last" ||
                                        errorTrimWord === "two"
                                            ? `${s.inputError}`
                                            : " "
                                    }`}
                                    placeholder="Ukraine..."
                                    value={lastWord}
                                    onInput={(e) =>
                                        getLastWordInput(
                                            e.target.value,
                                            setLastWord
                                        )
                                    }
                                    type="text"
                                />
                            </div>
                            <div className="btn-and-error_text">
                                {errorTrimWord === "last" ||
                                errorTrimWord === "first" ? (
                                    <div className="textError">
                                        Заповніть вкзане поле
                                    </div>
                                ) : errorTrimWord == "two" ? (
                                    <div className="textError">
                                        Заповніть вказані поля
                                    </div>
                                ) : (
                                    ""
                                )}
                                <button
                                    className="create_btn"
                                    onClick={() => {
                                        onClickSubmitCreateDiv(
                                            firstWord,
                                            lastWord,
                                            setFirstWord,
                                            setLastWord,
                                            setMainArrayCreatedWords,
                                            mainArrayCreatedWords,
                                            // =======================
                                            setErrorTrimWord,
                                            setAllstate,
                                            allstate
                                        );
                                        checkTrimWord(firstWord, lastWord);
                                    }}
                                >
                                    <p style={{ marginRight: "15px " }}>
                                        Додати слова{" "}
                                    </p>
                                    <FontAwesomeIcon
                                        style={{
                                            fontSize: "17px",
                                            color: "rgba(255, 255, 255, 0.704)",
                                        }}
                                        icon={faCirclePlus}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
