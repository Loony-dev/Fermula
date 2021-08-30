import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/index'
import Balance from '../Balance/index'

import { usePlatform, ANDROID, IOS } from '@vkontakte/vkui'

import '../../assets/css/main.css';

const GameHeader = ({ balance = false }) => {
    const platform = usePlatform(); // android или ios

    // -- Да, костыль, но я не JS девелопер TODO - ReWrite
    const isIOS = platform === IOS
    const isAndroid = platform === ANDROID

    return (
        <div>
            {isAndroid && <div style={{marginTop: 'var(--panelheader_height_android)'}} />}
            {isIOS && <div style={{marginTop: 'var(--panelheader_height_ios)'}} />}

            <nav id='navbar' className='navbar' >
                <Logo />

                {(balance) && <Balance />}
            </nav>

            <div className="header-level">
                <div className="header-level-progress" style={{width: '40%'}} />
            </div>
        </div>
    )
}

GameHeader.propTypes = {
    balance: PropTypes.bool
};

export default React.memo(GameHeader);
