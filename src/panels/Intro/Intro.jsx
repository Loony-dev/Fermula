import React, {Fragment} from 'react';

import {Panel, PanelHeader, Avatar, Group, Div} from '@vkontakte/vkui';

import './Intro.css';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
    return (
        <Panel id={id} centered={true}>
            <PanelHeader>
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
            }

            {snackbarError}
        </Panel>
    )
};

export default Intro;
