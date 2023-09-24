import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/styles';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

function ResultsList(props) {
  return (
    <View style={{marginBottom: 8}}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('Result', {
            id: item.id
          })}>
            <ResultsDetail result={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default withNavigation(ResultsList)