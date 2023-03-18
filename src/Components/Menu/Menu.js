import React, {useState} from 'react';
import s from './Menu.module.sass'
import search from '../../Images/svg/searchMenuBtn.svg'
import favorive from '../../Images/svg/favoriteMenuBtn.svg'
import profile from '../../Images/svg/profileMenuBtn.svg'
export const Menu = () => {
    const [menuActiveBtn,setActiveMenuBtn] = useState('search')
    return (
        <div className={s.main}>
            <button
                onClick={() => setActiveMenuBtn('search')}
            style={menuActiveBtn === 'search' ? {color: '#222222'} : {}}>
                <img style={menuActiveBtn === 'search' ? {
                      filter: `invert(0%) sepia(0%) saturate(0%) hue-rotate(271deg) brightness(1%) contrast(104%)`,
                } : {}} src={search} alt="search"/>
                Поиск
            </button>
            <button
                onClick={() => setActiveMenuBtn('favorite')}
            style={menuActiveBtn === 'favorite' ? {color: '#222222'} : {}}>
                <img style={menuActiveBtn === 'favorite' ? {
                      filter: `invert(0%) sepia(0%) saturate(0%) hue-rotate(271deg) brightness(1%) contrast(104%)`,
                } : {}} src={favorive} alt="favorite"/>
                Вишлист
            </button>
            <button
                onClick={() => setActiveMenuBtn('profile')}
            style={menuActiveBtn === 'profile' ? {color: '#222222'} : {}}>
                <img style={menuActiveBtn === 'profile' ? {
                      filter: `invert(0%) sepia(0%) saturate(0%) hue-rotate(271deg) brightness(1%) contrast(104%)`,
                } : {}} src={profile} alt="profile"/>
                Профиль
            </button>
        </div>
    );
};
