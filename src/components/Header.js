import React, {useState} from 'react';
import {getFilmsThunk, sortFilmsByZYX} from "../redux/actions";


const Header = (props) => {

    const [ABCSortisActive, setABCSortisActive] = useState(false)
    const [ZYXSortisActive, setZYXSortisActive] = useState(false)
    const [dontSortIsActive, setDontSortIsActive] = useState(true)

    const sortByABC = () => {
        setABCSortisActive(true)
        setZYXSortisActive(false)
        setDontSortIsActive(false)
        props.sortFilmsByABC()
    }
    const sortByZYX = () => {
        setZYXSortisActive(true)
        setABCSortisActive(false)
        setDontSortIsActive(false)
        props.sortFilmsByZYX()
    }
    const dontSort = () => {
        setDontSortIsActive(false)
        setABCSortisActive(true)
        setZYXSortisActive(true)
        props.getFilmsThunk()
    }

    return (
            <header className="header">
                <div className={"header__search"}>
                    <input placeholder={'Search film'} type={'text'} onKeyUp={props.searchText} />
                    <button onClick={sortByABC} className={`header__button ${ABCSortisActive && 'header__button_active'}`}>Sort by ABC</button>
                    <button onClick={sortByZYX} className={`header__button ${ZYXSortisActive && 'header__button_active'}`}>Sort by ZYX</button>
                    <button onClick={dontSort} className={`header__button ${dontSortIsActive && 'header__button_active'}`}>Don`t sort</button>
                </div>
            </header>
    );
}


export default Header