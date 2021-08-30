import React from 'react';
import {Panel} from "@vkontakte/vkui";

import '../assets/css/main.css';
import GameHeader from "../components/GameHeader";

const Menu = ({id, fetchedUser, go}) => {
    return (
        <Panel id={id}>
            <GameHeader balance={true} />

            <header id="header" className="header">
                <div className="page-name">Меню</div>
            </header>

            <a onClick={go('profile')} className="buttons-light d-block w-75 mx-auto mt">Профиль</a>
            <a onClick={go('profile')} className="buttons-light d-block w-75 mx-auto mt">Гараж</a>
            <a onClick={go('profile')} className="buttons-light d-block w-75 mx-auto mt">Магазин</a>
            <a onClick={go('intro')} className="buttons-light d-block w-75 mx-auto mt">Топ игроков</a>
        </Panel>
    )
}

export default Menu
