import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from '../styles/styles';
import ResultsDetail from './ResultsDetail';

export default function ResultsList(props) {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={props.results}
        renderItem={({item}) => <ResultsDetail result={item}/>}
        keyExtractor={(result) => result.id}
        horizontal/>
    </View>
  )
}