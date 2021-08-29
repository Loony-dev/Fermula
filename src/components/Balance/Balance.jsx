import React from 'react';

import Coin from '../../assets/img/coin.png'
import Lightning from '../../assets/img/lightning.png'

import '../../assets/css/main.css';

const Balance = () => {
    return (
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
    )
}

export default React.memo(Balance);
