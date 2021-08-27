import React from 'react';
import PropTypes from 'prop-types';

import { classNames as cn } from '@vkontakte/vkui';

import './logo.css'

const Logo = ({ className }) => {
    return (
        <nav id={cn('Logo', className)} className={cn('Logo', className)}>
            <div className="navbar-logo">Фермула</div>
        </nav>
    )
}

Logo.propTypes = {
    className: PropTypes.any
};

export default React.memo(Logo);
