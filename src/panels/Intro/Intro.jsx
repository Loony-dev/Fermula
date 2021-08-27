import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import './Intro.css';

const Intro = props => (
	<Panel id={props.id}>
		<PanelHeader>Фермула</PanelHeader>
	</Panel>
);

export default Intro;
