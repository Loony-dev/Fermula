import React, {Fragment} from 'react';

import {Panel, PanelHeader, Avatar, Group, Div, Header} from '@vkontakte/vkui';

import Coin from '../../img/coin.png'
import Lightning from '../../img/lightning.png'

import './Intro.css';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
    return (
        <Panel id={id} separator={false}>
            <PanelHeader>
                <nav id="navbar" className="navbar">
                    <div className="navbar-logo">Фермула</div>
                    <div className="navbar-info">
                        <div className="navbar-balance">
                            <img src={Coin} alt="coin" />
                            <span>350</span>
                        </div>
                        <div className="navbar-energy">
                            <img src={Lightning} alt="lightning" />
                            <span>350</span>
                        </div>
                    </div>
                </nav>
            </PanelHeader>

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

            {snackbarError}
        </Panel>
    )
};

export default Intro;
