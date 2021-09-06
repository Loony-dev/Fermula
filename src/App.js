import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider, Group, Avatar, Snackbar
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Profile from './panels/Profile';
import Intro from './panels/Intro';
import Menu from './panels/Menu';
import Garage from './panels/Garage';

import {ROUTES, STORAGE_KEYS} from './utils/constants'

import {storageInit, storageSet} from "./utils/storage";
import {user_info} from "./utils/globalVars";

import './assets/fonts/TTNorms/stylesheet.css'
import {Icon24Error} from "@vkontakte/icons";

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [snackbar, setSnackbar] = useState(false);

	let user = null;

	useEffect(() => {
		async function fetchData() {
			const userInfo = await bridge.send('VKWebAppGetUserInfo');

			setSnackbar(<Snackbar
				layout='vertical'
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic-red)'}}><Icon24Error fill='#fff' width='24' height='24' /></Avatar>}
				duration={2000}
			>{await storageInit()}</Snackbar>)

			await storageSet(STORAGE_KEYS.HAS_SEEN_INTRO, {hasSeenIntro: true})
			await storageSet(STORAGE_KEYS.USER_INFO, user_info)

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
		setActivePanel(ROUTES.MENU)
	}

	return (
		<ConfigProvider scheme="bright_light">
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel}>
						<Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} startGame={startGame} snackbarError={snackbar} />
						<Profile id={ROUTES.PROFILE} fetchedUser={fetchedUser} go={go} user={user} snackbarError={snackbar}/>
						<Menu id={ROUTES.MENU} go={go} snackbarError={snackbar}/>
						<Garage id={ROUTES.GARAGE} go={go} user={user} snackbarError={snackbar}/>
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
