import s from "./All.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const All = ({
    allstate,
    setAllstate,
    searchState,
    setSearchState,
    getValueSearchInput,
    onClickRemove,
    addtoPage,
    hardState,
    setHardState,
    sortState,
    setSelectedSort,
    selectedSort,
}) => {
    const [hasText, setHasText] = useState(false);
    return (
        <main>
            <div className={s.action_container}>
                <div className={s.search}>
                    <input
                        className={`${s.search_input} ${
                            hasText ? s.has_text : ""
                        }`}
                        placeholder="Search..."
                        type="text"
                        onChange={(e) => {
                            setHasText(e.target.value.trim().length > 0);
                            getValueSearchInput(
                                e.target.value,
                                setSearchState,
                                allstate
                            );
                        }}
                    />
                    <FontAwesomeIcon
                        style={{ cursor: "pointer", margin: " 0 10px 0 10px" }}
                        icon={faMagnifyingGlass}
                    />
                </div>
                <div className={s.sortArray}>
                    {" "}
                    Сортувати :{" "}
                    <select
                        className={s.selector_box}
                        value={selectedSort}
                        onChange={(e) => {
                            sortState(
                                e.target.value,
                                searchState,
                                setSearchState,
                                setSelectedSort
                            );
                        }}
                    >
                        {/* <option disabled>Сортувати</option> */}
                        <option
                            className={s.option_box}
                            value="lastWord"
                        >
                            За Українськими словами
                        </option>
                        <option
                            className={s.option_box}
                            value="firstWord"
                        >
                            За Англійськими словами
                        </option>
                    </select>
                </div>
            </div>
            <div className="main">
                <div className={s.all}>
                    {searchState.length === 0 ? (
                        <h1 className={s.error_text}>Такого слова немає</h1>
                    ) : (
                        searchState.map((el, index) => (
                            <div
                                key={index}
                                className={s.container_item_all}
                            >
                                <ul className={s.list}>
                                    <li className={s.link_all}>
                                        {el.firstWord}
                                    </li>{" "}
                                    <p>-</p>
                                    <li className={s.link_all}>
                                        {el.lastWord}
                                    </li>
                                </ul>
                                <div>
                                    <button
                                        className={s.btn_x}
                                        onClick={() =>
                                            onClickRemove(
                                                el.id,
                                                allstate,
                                                setAllstate
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            style={{
                                                fontSize: "17px",
                                                color: "rgba(255, 255, 255, 0.704)",
                                            }}
                                        />
                                    </button>
                                    <button
                                        className={s.to_other_state}
                                        onClick={() =>
                                            addtoPage(
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
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};
