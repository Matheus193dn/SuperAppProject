import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from '../../components/Sections';

function LocalModule(props: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const {title = ''} = props;
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="Step Zero">
        <Text style={styles.highlight}>{title}</Text>
      </Section>
      <Section title="Step One">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your edits.
      </Section>
      <Section title="See Your Changes">
        <ReloadInstructions />
      </Section>
      <Section title="Debug">
        <DebugInstructions />
      </Section>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section>
      <LearnMoreLinks />
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default LocalModule;
