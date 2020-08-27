import React, {useState} from 'react';

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
        setDontSortIsActive(true)
        setABCSortisActive(false)
        setZYXSortisActive(false)
        props.getFilmsThunk()
    }

    return (
            <header className="header">
                <div className={"header__search"}>
                    <input placeholder={'Search film'} type={'text'} onKeyUp={props.searchText} />
                    <button onClick={sortByABC} disabled={ABCSortisActive} className={`header__button`}>Sort by ABC</button>
                    <button onClick={sortByZYX} disabled={ZYXSortisActive} className={`header__button`}>Sort by ZYX</button>
                    <button onClick={dontSort} disabled={dontSortIsActive} className={`header__button`}>Don`t sort</button>
                </div>
            </header>
    );
}


export default Header