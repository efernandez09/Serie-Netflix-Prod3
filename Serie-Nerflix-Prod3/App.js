import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Screen from './src/components/actors/actors';

export default function App() {
  return (
    <SafeAreaView> 
      <Screen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#686868",
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 0,
    backgroundColor: "#686868",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
