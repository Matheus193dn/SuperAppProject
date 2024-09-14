/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import LocalModule from './modules/LocalModule';
import RemoteModule from './modules/RemoteModule';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isShowLocalModule, setIsShowLocalModule] = useState<boolean>(false);
  const [isShowRemoteModule, setIsShowRemoteModule] = useState<boolean>(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="Show Local Module"
            onPress={() => setIsShowLocalModule(!isShowLocalModule)}
          />
          {isShowLocalModule ? (
            <LocalModule title="This is from Local Module" />
          ) : (
            <></>
          )}
          <Button
            title="Show Remote Module"
            onPress={() => setIsShowRemoteModule(!isShowRemoteModule)}
          />
          {isShowRemoteModule ? (
            <RemoteModule title="This is from Remote Module" />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
