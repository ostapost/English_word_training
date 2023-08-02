import { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./api-worlds/api";
import { MainPage } from "./component/main/MainPage";
import { HeaderPage } from "./component/header/HeaderPage";
import { Route, Routes } from "react-router-dom";
import { ThirdPage } from "./component/third/ThirdPage";
import { getTextFromInput } from "./function/getTextFromInput";
import { showTrueEnglishVariant } from "./function/showTrueEnglishVariant";
import { addApiInState } from "./function/addApiInState";
import { wordToUpperCase } from "./function/wordToUpperCase";
import { getStoredState } from "./function/getStoredState";
import {
    onClickSubmitCreateDiv,
    getFirstWordInput,
    getLastWordInput,
    checkTrimWord,
} from "./function/onClickSubmitCreateDiv";
import {
    onClickRemove,
    onClickRemoveAndAdd,
    addtoPage,
} from "./function/onClickRemove";
import { HardPage } from "./component/hard/HardPage";
import { colorsWord } from "./function/colorsWord";
import { All } from "./component/all/All";
import { getValueSearchInput } from "./function/getValueSearchInput.js";
import { sortState } from "./function/sortState";
function App() {
    const [state, setState] = useState([]);
    const [writtenTexts, setWrittenTexts] = useState([]);
    const [writtenTexts3, setWrittenTexts3] = useState([]);
    const [writtenTexts4, setWrittenTexts4] = useState([]);
    const [checkWord, setCheckWord] = useState([]);
    const [checkWord3, setCheckWord3] = useState([]);
    const [checkWord4, setCheckWord4] = useState([]);
    const [translationsState, setTranslationsState] = useState({});
    const [translationsState3, setTranslationsState3] = useState({});
    const [translationsState4, setTranslationsState4] = useState({});
    // ============================Create page State============================================
    const [firstWord, setFirstWord] = useState("");
    const [lastWord, setLastWord] = useState("");
    const [mainArrayCreatedWords, setMainArrayCreatedWords] = useState(
        getStoredState("CreateState")
    );
    // ==================================================
    const [allstate, setAllstate] = useState(getStoredState("AllState"));
    useEffect(() => {
        setSearchState(allstate);
        setPoint(hardState.length);
    }, [allstate]);

    const [searchState, setSearchState] = useState(allstate);

    // ===================================================
    const [color, setColor] = useState("first-word-item ");
    const [color2, setColor2] = useState("first-word-item ");
    const [color3, setColor3] = useState("first-word-item ");
    // ====================Hard Page state ===============================================
    const [hardState, setHardState] = useState(getStoredState("HardState"));
    const [errorTrimWord, setErrorTrimWord] = useState("");
    // ======================================================
    const [point, setPoint] = useState(hardState.length);
    const [selectedSort, setSelectedSort] = useState();
    useEffect(() => {
        setPoint(hardState.length);
    }, [hardState]);
    useEffect(() => {
        // addApiInState(URL2, setState2, setTranslationsState2, setColor);
        addApiInState(URL, setState, setTranslationsState, setColor);
    }, []);
    useEffect(() => {
        let init = [];
        mainArrayCreatedWords.forEach((el, index) => {
            init[index] = "first-word-item ";
            setColor2([...init]);
        });
    }, [mainArrayCreatedWords]);
    useEffect(() => {
        let init = [];
        hardState.forEach((el, index) => {
            init[index] = "first-word-item screen";
            setColor3([...init]);
        });
    }, [hardState]);

    localStorage.setItem("CreateState", JSON.stringify(mainArrayCreatedWords));
    localStorage.setItem("HardState", JSON.stringify(hardState));
    localStorage.setItem("AllState", JSON.stringify(allstate));
    return (
        <div className="App">
            <HeaderPage point={point} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage
                            setState={setState}
                            onClickRemove={onClickRemove}
                            setWrittenTexts={setWrittenTexts}
                            state={state}
                            getTextFromInput={getTextFromInput}
                            writtenTexts={writtenTexts}
                            checkWord={checkWord}
                            translationsState={translationsState}
                            showTrueEnglishVariant={showTrueEnglishVariant}
                            setCheckWord={setCheckWord}
                            setTranslationsState={setTranslationsState}
                            wordToUpperCase={wordToUpperCase}
                            colorsWord={colorsWord}
                            color={color}
                            setColor={setColor}
                        />
                    }
                />

                <Route
                    path="/page3"
                    element={
                        <ThirdPage
                            translationsState3={translationsState3}
                            setWrittenTexts3={setWrittenTexts3}
                            getTextFromInput={getTextFromInput}
                            writtenTexts3={writtenTexts3}
                            setCheckWord3={setCheckWord3}
                            checkWord3={checkWord3}
                            setTranslationsState3={setTranslationsState3}
                            showTrueEnglishVariant={showTrueEnglishVariant}
                            wordToUpperCase={wordToUpperCase}
                            // ==============Create Page State========================
                            firstWord={firstWord}
                            setFirstWord={setFirstWord}
                            lastWord={lastWord}
                            setLastWord={setLastWord}
                            mainArrayCreatedWords={mainArrayCreatedWords}
                            setMainArrayCreatedWords={setMainArrayCreatedWords}
                            onClickSubmitCreateDiv={onClickSubmitCreateDiv}
                            getFirstWordInput={getFirstWordInput}
                            getLastWordInput={getLastWordInput}
                            onClickRemove={onClickRemove}
                            onClickRemoveAndAdd={onClickRemoveAndAdd}
                            // =================================
                            hardState={hardState}
                            setHardState={setHardState}
                            color={color2}
                            setColor={setColor2}
                            colorsWord={colorsWord}
                            checkTrimWord={checkTrimWord}
                            setErrorTrimWord={setErrorTrimWord}
                            errorTrimWord={errorTrimWord}
                            setAllstate={setAllstate}
                            allstate={allstate}
                        />
                    }
                />
                <Route
                    path="/page4"
                    element={
                        <HardPage
                            hardState={hardState}
                            onClickRemove={onClickRemove}
                            setWrittenTexts={setWrittenTexts4}
                            getTextFromInput={getTextFromInput}
                            writtenTexts={writtenTexts4}
                            checkWord={checkWord4}
                            translationsState={translationsState4}
                            showTrueEnglishVariant={showTrueEnglishVariant}
                            setCheckWord={setCheckWord4}
                            setTranslationsState={setTranslationsState4}
                            wordToUpperCase={wordToUpperCase}
                            setHardState={setHardState}
                            color={color3}
                            setColor={setColor3}
                            colorsWord={colorsWord}
                        />
                    }
                />
                <Route
                    path="/all"
                    element={
                        <All
                            mainArrayCreatedWords={mainArrayCreatedWords}
                            setAllstate={setAllstate}
                            allstate={allstate}
                            searchState={searchState}
                            setSearchState={setSearchState}
                            getValueSearchInput={getValueSearchInput}
                            onClickRemove={onClickRemove}
                            addtoPage={addtoPage}
                            hardState={hardState}
                            setHardState={setHardState}
                            sortState={sortState}
                            setSelectedSort={setSelectedSort}
                            selectedSort={selectedSort}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
