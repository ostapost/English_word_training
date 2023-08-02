import { NavLink } from "react-router-dom";
import s from "./HeaderPage.module.css";

export const HeaderPage = ({ point }) => {
    return (
        <header className={s.header}>
            <ul className={s.list}>
                <NavLink
                    className={({ isActive }) => (isActive ? s.active : s.link)}
                    to="/"
                >
                    Api Page
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? s.active : s.link)}
                    to="/page3"
                >
                    Create Page
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? s.active : s.link)}
                    to="/page4"
                >
                    <p>Hard Words</p>
                    <div className={s.point}>
                        <p>{point}</p>
                    </div>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? s.active : s.link)}
                    to="/all"
                >
                    All Words
                </NavLink>
            </ul>
        </header>
    );
};
