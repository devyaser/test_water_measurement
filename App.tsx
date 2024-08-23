import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import Tank from './components/tank';
import SliderContainer from './components/slider';
import ToggleButtons from './components/toggleButtons';
import Footer from './components/footer';

const App: React.FC = () => {
  const [value, setValue] = useState<number>(65);
  const [tab, setTab] = useState<string>('Percentage');

  const handleTabChange = (newTab: string) => setTab(newTab);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <Text style={styles.header}>Source Minimum</Text>
        <ToggleButtons tab={tab} onTabChange={handleTabChange} />

        <Text style={styles.infoText}>
          We'll stop the pump when your tank drops below:
        </Text>

        <View style={styles.mainContainer}>
          <Tank value={value} tab={tab} />
          <SliderContainer value={value} setValue={setValue} />
        </View>

        <Footer value={value} onChangeText={(newVal: number) => setValue(newVal)} tab={tab} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
});

export default App;