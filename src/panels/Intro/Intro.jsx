import React, {Fragment} from 'react';

import {Panel, PanelHeader, Avatar, Group, Div, Header} from '@vkontakte/vkui';

import Coin from '../../img/coin.png'
import Lightning from '../../img/lightning.png'

import './Intro.css';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
    return (
        <Panel id={id}>
            <Header id='header' className='header'>
                <Div className='header-logo'>Фермула</Div>
                <Div className='header-info'>
                    <Div className='header-balance'>
                        <Avatar src={Coin} width={15} height={15} />
                        <span>350</span>
                    </Div>
                    <Div className='header-energy'>
                        <Avatar src={Lightning} width={15} height={15} />
                        <span>350</span>
                    </Div>
                </Div>
            </Header>

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
