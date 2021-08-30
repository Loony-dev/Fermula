import React from 'react';
import {Card, CardScroll, Panel} from "@vkontakte/vkui";

import GameHeader from "../components/GameHeader";

import {ROUTES} from '../utils/constants'

import Test7 from '../assets/img/test/test7.png'

import '../assets/css/main.css';

const Garage = ({id, go}) => {
    return (
        <Panel id={id}>
            <GameHeader balance={true} />

            <section className="section">
                <div className="section-name">Достижения</div>
                <div className="section-content">
                    <CardScroll className="owl-carousel owl-products">
                        <Card>
                            <div className="card">
                                <img src={Test7} alt="" className="card-image" />
                                <div className="card-desc">1 элемент</div>
                            </div>
                        </Card>
                        <Card>
                            <div className="card">
                                <img src={Test7} alt="" className="card-image" />
                                <div className="card-desc">2 элемент</div>
                            </div>
                        </Card>
                        <Card>
                            <div className="card">
                                <img src={Test7} alt="" className="card-image" />
                                <div className="card-desc">3 элемент</div>
                            </div>
                        </Card>
                        <Card>
                            <div className="card">
                                <img src={Test7} alt="" className="card-image" />
                                <div className="card-desc">4 элемент</div>
                            </div>
                        </Card>
                        <Card>
                            <div className="card">
                                <img src={Test7} alt="" className="card-image" />
                                <div className="card-desc">5 элемент</div>
                            </div>
                        </Card>
                        <Card>
                            <div className="card">
                                <img src={Test7} alt="" className="card-image" />
                                <div className="card-desc">5 элемент</div>
                            </div>
                        </Card>
                    </CardScroll>
                </div>
            </section>
            <section className="section">
                <div className="section-name">Информация</div>
                <div className="section-content p-30">
                    <table className="w-100">
                        <tr>
                            <td>Ваш ник</td>
                            <th>Loony-dev</th>
                        </tr>
                        <tr>
                            <td>Сыграно гонок</td>
                            <th>9458</th>
                        </tr>
                        <tr>
                            <td>Побед</td>
                            <th>7412</th>
                        </tr>
                        <tr>
                            <td>Поражений</td>
                            <th>2046</th>
                        </tr>
                        <tr>
                            <td>Процент побед</td>
                            <th>49.67%</th>
                        </tr>
                        <tr>
                            <td>Проведено в игре</td>
                            <th>154 дня</th>
                        </tr>
                        <tr>
                            <td>Клан</td>
                            <th>Машиностроители!</th>
                        </tr>
                    </table>
                </div>
            </section>
            <a onClick={go} data-to={ROUTES.MENU} className="buttons-primary w-50 mt d-block mx-auto"><span>Меню</span></a>
        </Panel>
    )
}

export default Garage
