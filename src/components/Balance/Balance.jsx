import React from 'react';

import Coin from '../../assets/img/coin.png'
import Lightning from '../../assets/img/lightning.png'

import '../../assets/css/main.css';

const Balance = () => {
    return (
        <div className="navbar-info">
            <div className="navbar-balance-bg" />

            <div className="navbar-balance">
                <img src={Coin} alt="coin" />
                <span>350</span>
            </div>

            <div className="navbar-energy">
                <img src={Lightning} alt="lightning" />
                <span>50/100</span>
            </div>

            <div className="navbar-energy">
                <span>Уровень: 1</span>
            </div>
        </div>
    )
}

export default React.memo(Balance);
