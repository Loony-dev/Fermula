import React, {Fragment} from 'react';
import {Panel, PanelHeader, Avatar, Group, Div, Header} from '@vkontakte/vkui';

import GameHeader from "../../components/GameHeader/index"

import './Intro.css';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
    return (
        <Panel id={id} separator={false}>
            <Header className="header-padding" />
            <GameHeader balance={true} />

            {/*<PanelHeader>
                Фермула
            </PanelHeader>

            {(!userHasSeenIntro && fetchedUser) &&
                <Fragment>
                    <Group>
                        <Div className='User'>
                            {fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200} />}
                        </Div>
                    </Group>
                </Fragment>
            }*/}

            <header id="header" className="header">
                <div className="welcome-text">
                    <h3>Фермула | построй свой завод</h3>
                    <p>Cтрой заводы, прокачивай свой город <br /> и поборись за первое место в топе</p>
                </div>
            </header>

            <main id="main" className="main">
                <div className="row">
                    <div className="col-6">
                        <button className="buttons-primary w-100"><span>Начать игру</span></button>
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
