import React from 'react';
import {Header, View, CardScroll, Card} from '@vkontakte/vkui';

import GameHeader from "../components/GameHeader"

import '../assets/css/main.css';

import Test from '../assets/img/test/test.png'
import Test2 from '../assets/img/test/test2.png'
import Test3 from '../assets/img/test/test3.png'
import Test4 from '../assets/img/test/test4.png'
import Test5 from '../assets/img/test/test5.png'

const Profile = (id, fetchedUser, go) => {
    return (
        <View id={id}>
            <Header style={{margin: '0 38px 0 0'}} />
            <GameHeader balance={true} />

            <header id="header" className="header">
                <div className="page-name">Личный кабинет</div>
            </header>

            <main id="main" className="main">
                <section className="section">
                    <div className="section-name">Ваши детали</div>
                    <div className="section-content">
                        <CardScroll className="owl-carousel owl-products">
                            <Card>
                                <div className="card">
                                    <img src={Test} alt="" className="card-image"/>
                                    <div className="card-desc">1 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test} alt="" className="card-image"/>
                                    <div className="card-desc">2 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test} alt="" className="card-image"/>
                                    <div className="card-desc">3 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test} alt="" className="card-image"/>
                                    <div className="card-desc">4 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test} alt="" className="card-image"/>
                                    <div className="card-desc">5 элемент</div>
                                </div>
                            </Card>
                        </CardScroll >
                    </div>
                </section>
                <section className="section">
                    <div className="section-name">Ваши материалы</div>
                    <div className="section-content">
                        <CardScroll  className="owl-carousel owl-products">
                            <Card>
                                <div className="card">
                                    <img src={Test2} alt="" className="card-image"/>
                                    <div className="card-desc">1 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test3} alt="" className="card-image"/>
                                    <div className="card-desc">2 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test2} alt="" className="card-image"/>
                                    <div className="card-desc">3 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test2} alt="" className="card-image"/>
                                    <div className="card-desc">4 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test3} alt="" className="card-image"/>
                                    <div className="card-desc">5 элемент</div>
                                </div>
                            </Card>
                        </CardScroll >
                    </div>
                </section>
                <section className="section">
                    <div className="section-name">Ваши здания</div>
                    <div className="section-content">
                        <CardScroll  className="owl-carousel owl-products">
                            <Card>
                                <div className="card">
                                    <img src={Test4} alt="" className="card-image"/>
                                    <div className="card-desc">Штаб</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test5} alt="" className="card-image"/>
                                    <div className="card-desc">Заправка</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test4} alt="" className="card-image"/>
                                    <div className="card-desc">Мойка</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test5} alt="" className="card-image"/>
                                    <div className="card-desc">4 элемент</div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card">
                                    <img src={Test4} alt="" className="card-image"/>
                                    <div className="card-desc">5 элемент</div>
                                </div>
                            </Card>
                        </CardScroll >
                        <a href="#" className="buttons-primary w-50 mt d-block mx-auto"><span>Магазин</span></a>
                    </div>
                </section>
            </main>
        </View>
    )
}

export default Profile
