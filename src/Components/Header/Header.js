import React from 'react';
import s from './Header.module.sass'
import basket from '../../Images/svg/basket.svg'
export const Header = () => {
    return (
        <div className={s.main}>
            <div className={s.basket}>
                <span className={s.counter}>{2}</span> <img src={basket} alt="basket"/>
            </div>
        </div>
    );
};
