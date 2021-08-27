import React from 'react';

import {Panel, PanelHeader} from '@vkontakte/vkui';

import './Intro.css';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
    return (
        <Panel id={id} centered={true}>
            <PanelHeader>
                Фермула
            </PanelHeader>

            {(userHasSeenIntro && fetchedUser) && 'Hi!'}

            {snackbarError}
        </Panel>
    )
};

export default Intro;
