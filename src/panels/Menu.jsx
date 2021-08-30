import React from 'react';
import {Panel} from "@vkontakte/vkui";

import '../assets/css/main.css';

const Menu = (id, fetchedUser, go) => {
    return (
        <Panel id={id}>
            <a className="buttons-light d-block w-75 mx-auto mt">Профиль</a>
            <a className="buttons-light d-block w-75 mx-auto mt">Гараж</a>
            <a className="buttons-light d-block w-75 mx-auto mt">Магазин</a>
            <a className="buttons-light d-block w-75 mx-auto mt">Топ игроков</a>
            <form action data-operation="logout">
                <button type="button" className="buttons-light d-block w-75 mx-auto mt">Выйти</button>
            </form>
        </Panel>
    )
}

export default Menu
