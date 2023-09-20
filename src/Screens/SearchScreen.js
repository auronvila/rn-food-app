import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {useState} from 'react';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [searchApi, errorMessage, results] = useResults()

  function filterResultByPrice(price) {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SearchBar
        onTermSubmit={searchApi}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text> We have found {results.length}</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
      <ResultsList results={filterResultByPrice('₺')} title={'Cost Effective'}/>
      <ResultsList results={filterResultByPrice('₺₺')} title={'Bit Pricer'}/>
      <ResultsList results={filterResultByPrice('₺₺₺')} title={'Big Spender'}/>
    </View>
  )
}