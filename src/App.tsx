import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GymFooter, GymHeader } from './components';

const App = () => {
  return (
    <View style={styles.container}>
      <GymHeader />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <GymFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
