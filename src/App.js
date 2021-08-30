import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	ScreenSpinner,
	AdaptivityProvider,
	AppRoot,
	Snackbar,
	Avatar,
	ConfigProvider,
	PanelHeader
} from '@vkontakte/vkui';
import {Icon24Error} from "@vkontakte/icons";
import '@vkontakte/vkui/dist/vkui.css';

import Profile from './panels/Profile';
import Intro from './panels/Intro';
import Menu from './panels/Menu';

import {ROUTES, STORAGE_KEYS} from './utils/constants'

import './assets/fonts/TTNorms/stylesheet.css'
import {hidden} from "chalk";

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [userHasSeenIntro, setUserHasSeenIntro] = useState(false);
	const [snackbar, setSnackbar] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const storageData = await bridge.send('VKWebAppStorageGet', {
				keys: Object.values(STORAGE_KEYS)
			});
			const data = {};

			storageData.keys.forEach(({key, value}) => {
				try {
					data[key] = value ? JSON.parse(value) : {}

					switch (key) {
						case STORAGE_KEYS.STATUS:
							if (data[key].hasSeenIntro) {
    							setActivePanel(ROUTES.MENU)
								setUserHasSeenIntro(true)
							}
							break
						default:
							break
					}
				} catch (error) {
					setSnackbar(<Snackbar
						layout='vertical'
						onClose={() => setSnackbar(null)}
						before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic-red)'}}><Icon24Error fill='#fff' width='14' height='14' /></Avatar>}
						duration={900}
					>Проблема с получением данных из Storage</Snackbar>)
				}
			})

			setUser(user);
			setPopout(null);
		}

		fetchData().then(() => {});
	}, []);

	const go = (panel) => {
		setActivePanel(panel);
	};

	const toMenu = () => {
		setActivePanel(ROUTES.MENU);
	};

	const toProfile = () => {
		setActivePanel(ROUTES.PROFILE);
	};

	const viewIntro = async function () {
		try {
			await bridge.send('VKWebAppStorageSet', {
				key: STORAGE_KEYS.STATUS,
				value: JSON.stringify({
					hasSeenIntro: true
				})
			})

			go(ROUTES.MENU)
		} catch (error) {
			setSnackbar(<Snackbar
				layout='vertical'
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic-red)'}}><Icon24Error fill='#fff' width='14' height='14' /></Avatar>}
				duration={900}
			>Проблема с отпарвкой данных в Storage</Snackbar>)
		}
	}

	return (
		<ConfigProvider scheme="bright_light">
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel} popout={popout} header={false}>
						<Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} viewHome={viewIntro} snackbarError={snackbar} userHasSeenIntro={userHasSeenIntro} />
						<Profile id={ROUTES.PROFILE} fetchedUser={fetchedUser} go={toMenu}/>
						<Menu id={ROUTES.MENU} fetchedUser={fetchedUser} go={toProfile}/>
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
