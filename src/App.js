import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	ScreenSpinner,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Profile from './panels/Profile';
import Intro from './panels/Intro';
import Menu from './panels/Menu';
import Garage from './panels/Garage';

import User from './models/user.model'

import {ROUTES} from './utils/constants'

import './assets/fonts/TTNorms/stylesheet.css'

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	let user = null;

	useEffect(() => {
		async function fetchData() {
			const userInfo = await bridge.send('VKWebAppGetUserInfo');

			user = new User(userInfo.id)

			if (!user.check())
				user.create()
			else {
				user.load()
				go(ROUTES.MENU)
			}

			setUser(userInfo);
			// setPopout(null);
		}

		fetchData().then(() => {});
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const startGame = () => {
		// -- TODO - Set has_seen_intro = true
		go(ROUTES.MENU)
	}

	return (
		<ConfigProvider scheme="bright_light">
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel}{/* popout={popout}*/}>
						<Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} startGame={startGame} />
						<Profile id={ROUTES.PROFILE} fetchedUser={fetchedUser} go={go} user={user}/>
						<Menu id={ROUTES.MENU} go={go}/>
						<Garage id={ROUTES.GARAGE} go={go} user={user}/>
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
