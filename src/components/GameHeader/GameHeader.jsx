import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/index'
import Balance from '../Balance/index'

import '../../assets/css/main.css';

const GameHeader = ({ balance = false }) => {
    return (
        <div className="gameHeader">
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
