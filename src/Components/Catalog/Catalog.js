import React, {useEffect, useState} from 'react';
import s from './Catalog.module.sass'
import rightArrow from '../../Images/svg/rightArrow.svg'


export const Catalog = () => {
    const [styleBtn, setStyleBtn] = useState(1)

    useEffect(() => {
        let underlineAnimation = document.querySelector(`.${s.underlineAnimation}`)
        let item = document.querySelectorAll(`.${s.buttonCatalog}`)

        function indicator(e) {
            console.log(e.offsetLeft, e.offsetWidth)
            underlineAnimation.style.left = e.offsetLeft+'px';
            underlineAnimation.style.width = e.offsetWidth+'px';
        }

        item.forEach(link => {
            link.addEventListener('click', (e) => {
                indicator(e.target)
            })
        })
        item[0].click()
    },[])

    return (
        <div className={s.main}>
            <div className={s.topToggler}>
                <button
                    style={styleBtn === 1 ? {fontWeight: '700'} : {}}
                    onClick={() => {setStyleBtn(1)}}
                        className={s.buttonCatalog}>Для нее</button>
                <button
                    style={styleBtn === 2 ? {fontWeight: '700'} : {}}
                    onClick={() => {setStyleBtn(2)}}
                        className={s.buttonCatalog}>ДЛЯ НЕГО</button>

                <div className={s.underlineAnimation}></div>
            </div>

            <div className={s.list}>
                <div className={s.elem}>Распродажа <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Новинки <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Одежда <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Обувь <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Сумки <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Аксессуары <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Premium <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Спорт <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Красота <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Дом <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Resale <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Бренды <img src={rightArrow} alt="rightArrow"/></div>

                <div className={s.elem}>Распродажа <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Новинки <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Обувь <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Сумки <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Аксессуары <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Premium <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Спорт <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Красота <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Дом <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Resale <img src={rightArrow} alt="rightArrow"/></div>
                <div className={s.elem}>Бренды <img src={rightArrow} alt="rightArrow"/></div>
            </div>
        </div>
    );
};
