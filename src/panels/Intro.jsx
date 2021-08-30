import React from 'react';
import {Panel, Header} from '@vkontakte/vkui';

import GameHeader from "../components/GameHeader"

import '../assets/css/main.css';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, viewHome}) => {
    return (
        <Panel id={id}>
            <GameHeader balance={false} />

            <header id="header" className="header">
                <div className="welcome-text">
                    <h3>Фермула | построй свой завод</h3>
                    <p>Cтрой заводы, прокачивай свой город <br /> и поборись за первое место в топе</p>
                </div>
            </header>

            <main id="main" style={{paddingLeft: '30px', paddingRight: '30px'}} className="main">
                <div className="row">
                    <div className="col-6">
                        <button onClick={viewHome} className="buttons-primary"><span>Начать игру</span></button>
                    </div>
                </div>

                <div className="row">
                    <p className="text-center text-desc mt mb">
                        Построй свою империю по производству автомобилей! присоединяйся к <span>345</span> игрокам уже
                        сегодня!
                    </p>
                </div>

                <div className="row">
                    <div className="welcome-content">
                        <h3>Что за фермула?</h3>
                        <p>Игра, становящаяся все лучше и лучше с каждым днем! Игра, от которой не так то просто
                            оторваться! Хочешь почувствовать себя настоящим гонщиком? Тогда регистрируйся, приглашай
                            друзей, покупай и прокачивай тачки, выигрывай турниры и стань чемпионом!</p>
                    </div>
                </div>
            </main>

            {snackbarError}
        </Panel>
    )
};

export default Intro;
