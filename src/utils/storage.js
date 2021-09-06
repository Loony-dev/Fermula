import bridge from '@vkontakte/vk-bridge';

import {STORAGE_KEYS} from './constants'

export async function storageInit() {
    const storageData = await bridge.send('VKWebAppStorageGet', {
        keys: Object.values(STORAGE_KEYS),
    });

    const data = {};

    let result = 'test'

    storageData.keys.forEach(({key, value}) => {
        try {
            data[key] = value ? JSON.parse(value) : {}

            switch (key) {
                case STORAGE_KEYS.HAS_SEEN_INTRO:
                    if (data[key].hasSeenIntro) {
                        // -- TODO - redirect to menu
                    }
                    result = data[key]
                    break

                case STORAGE_KEYS.USER_INFO:
                    result = data[key].lvl
                    break

                default:
                    break
            }
        } catch (error) {
            result = error;
        }
    })

    return result
}

export async function storageSet(key, value) {
    await bridge.send("VKWebAppStorageSet", {
        key: key,
        value: JSON.stringify(value)
    })
}
