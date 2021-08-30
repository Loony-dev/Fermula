import React from 'react';
import {Panel} from "@vkontakte/vkui";

import GameHeader from "../components/GameHeader";

import {ROUTES} from '../utils/constants'

import '../assets/css/main.css';

const Menu = ({id, fetchedUser, go}) => {
    return (
        <Panel id={id}>
            <GameHeader balance={true} />

            <header id="header" className="header">
                <div className="page-name">Меню</div>
            </header>

            <button onClick={go(ROUTES.PROFILE)} className="buttons-light d-block w-75 mx-auto mt">Профиль</button>
            <button onClick={go(ROUTES.PROFILE)} className="buttons-light d-block w-75 mx-auto mt">Гараж</button>
            <button onClick={go(ROUTES.PROFILE)} className="buttons-light d-block w-75 mx-auto mt">Магазин</button>
            <button onClick={go(ROUTES.PROFILE)} className="buttons-light d-block w-75 mx-auto mt">Топ игроков</button>
        </Panel>
    )
}

export default Menu
