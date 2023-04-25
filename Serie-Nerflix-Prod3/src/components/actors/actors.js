import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const DATA = [
  { id: '1', title: 'Episodio 1' },
  { id: '2', title: 'Episodio 2' },
  { id: '3', title: 'Episodio 3' },
  { id: '4', title: 'Episodio 4' },
  { id: '5', title: 'Episodio 5' },
];

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={require('../../../assets/lcdpBanner.jpg')}
        style={styles.bannerImage}
        resizeMode="cover"
      />
      <Text style={styles.bannerTitle}>La casa de papel</Text>
    </View>
  );
};

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Screen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <Banner />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    height: 235,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerTitle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default Screen;
