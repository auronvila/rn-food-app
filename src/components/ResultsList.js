import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from '../styles/styles';

export default function ResultsList(props) {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        data={props.results}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(result) => result.id}
        horizontal/>
    </View>
  )
}