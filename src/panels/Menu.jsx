import React from 'react';
import {Panel} from "@vkontakte/vkui";

import GameHeader from "../components/GameHeader";

import {ROUTES} from '../utils/constants'

import '../assets/css/main.css';

const Menu = ({id, go, snackbarError}) => {
    return (
        <Panel id={id}>
            <GameHeader balance={true} />

            <header id="header" className="header">
                <div className="page-name">Меню</div>
            </header>

            <a onClick={go} data-to={ROUTES.PROFILE} className="buttons-light d-block w-75 mx-auto mt">Профиль</a>
            <a onClick={go} data-to={ROUTES.GARAGE} className="buttons-light d-block w-75 mx-auto mt">Гараж</a>
            <a onClick={go} data-to={ROUTES.PROFILE} className="buttons-light d-block w-75 mx-auto mt">Магазин</a>
            <a onClick={go} data-to={ROUTES.INTRO} className="buttons-light d-block w-75 mx-auto mt">Топ игроков</a>

            {snackbarError}
        </Panel>
    )
}

export default Menu
