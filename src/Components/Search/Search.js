import React from 'react';
import s from './Search.module.sass'
import search from '../../Images/svg/search.svg'
export const Search = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>поиск</div>
            <div className={s.input}>
                <img src={search} alt="search"/>
                <input placeholder={"Поиск"} type="text"/>
            </div>
        </div>
    );
};
