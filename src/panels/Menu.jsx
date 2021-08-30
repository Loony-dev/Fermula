import React from 'react';
import {Button, Panel} from "@vkontakte/vkui";

import '../assets/css/main.css';
import GameHeader from "../components/GameHeader";

const Menu = (id, fetchedUser, go) => {
    return (
        <Panel id={id}>
            <GameHeader balance={true} />

            <header id="header" className="header">
                <div className="page-name">Меню</div>
            </header>

            <Button onClick={go} type="button" className="buttons-light d-block w-75 mx-auto mt">Профиль</Button>
            <Button className="buttons-light d-block w-75 mx-auto mt">Гараж</Button>
            <Button className="buttons-light d-block w-75 mx-auto mt">Магазин</Button>
            <Button className="buttons-light d-block w-75 mx-auto mt">Топ игроков</Button>
        </Panel>
    )
}

export default Menu
