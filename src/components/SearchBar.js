import {TextInput, View} from 'react-native';
import {styles} from '../styles/styles';
import {Feather} from '@expo/vector-icons'

export default function SearchBar(props) {
  return (
    <View style={styles.searchInputBackground}>
      <Feather style={styles.iconStyle} name={'search'}/>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        value={props.term}
        style={styles.inputStyle}
        placeholder={'Search'}
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
      />

    </View>
  )
}