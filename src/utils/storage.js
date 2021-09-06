import bridge from '@vkontakte/vk-bridge';

import {STORAGE_KEYS} from './constants'

export async function storageInit() {
    const storageData = await bridge.send('VKWebAppStorageGet', {
        keys: Object.values(STORAGE_KEYS),
    });

    const data = {};

    storageData.keys.forEach(({key, value}) => {
        try {
            data[key] = value ? JSON.parse(value) : {}

            switch (key) {
                case STORAGE_KEYS.HAS_SEEN_INTRO:
                    if (data[key].hasSeenIntro) {
                        // -- TODO - redirect to menu
                    }
                    break

                case STORAGE_KEYS.USER_INFO:
                    return data[key]

                default:
                    break
            }
        } catch (error) { /* code here.. */ }
    })

    return 'test'
}

export async function storageSet(key, value) {
    await bridge.send("VKWebAppStorageSet", {
        key: key,
        value: JSON.stringify(value)
    })
}
