import React from 'react';
import {Panel, Header} from '@vkontakte/vkui';

import GameHeader from "../components/GameHeader"

import '../assets/css/main.css';

const Profile = (id, fetchedUser, go) => {
    return (
        <Panel id={id}>
            <Header style={{margin: '0 38px 0 0'}} />
            <GameHeader balance={true} />
        </Panel>
    )
}

export default Profile
