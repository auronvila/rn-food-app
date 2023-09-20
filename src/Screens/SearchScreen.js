import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {useState} from 'react';
import useResults from '../hooks/useResults';

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [searchApi, errorMessage, results] = useResults()

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SearchBar
        onTermSubmit={searchApi}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text> We have found {results.length}</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  )
}