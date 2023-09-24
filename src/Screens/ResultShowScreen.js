import {Text, View} from 'react-native';

export default function ResultShowScreen(props) {
  const id = props.navigation.getParam('id')
  return (
    <View>
      <Text>Results Show</Text>
    </View>
  )
}