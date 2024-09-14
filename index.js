/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName, localModule} from './app.json';
import {ScriptManager, Script } from '@callstack/repack/client';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
    console.log('scriptId: ', scriptId);
    // if (__DEV__) {
    //     console.log('getDevServerURL: ', scriptId);
    //     return {
    //         url: Script.getDevServerURL(scriptId),
    //         cache: false,
    //     }
    // }

    // For production we want to load local chunks from from the file system.
    if (localModule.includes(scriptId)) {
        return {
            url: Script.getFileSystemURL(scriptId),
        };
    }

    const scriptUrl = Platform.select({
        ios: `http://localhost:8081/build/output/ios/remote/${scriptId}`,
        android: `http://127.0.0.1:8081/build/output/android/remote/${scriptId}`,
    });

    console.log('scriptUrl: ', scriptUrl);

    return {
        url: Script.getRemoteURL(scriptUrl),
    }
});

AppRegistry.registerComponent(appName, () => App);
