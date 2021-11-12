import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const getWaitListQuery = gql`
  {
    customers {
      id
      name
      hp
      timestamp
    }
  }
`;

const Item = ({title, hp, ts}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {title}
      {'\n'}
      {hp}
      {'\n'}
      {ts}
    </Text>
  </View>
);

const WaitList = props => {
  const {loading, error, data} = useQuery(getWaitListQuery);
  console.log('Error: ', error);
  console.log('data: ', data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading books feed </Text>;
  const renderItem = ({item}) => (
    <Item title={item.name} hp={item.hp} ts={item.timestamp} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 40}}>Reservations List</Text>
      <FlatList
        data={data.customers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

export default WaitList;
