import {ScrollView, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {useState} from 'react';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [searchApi, errorMessage, results] = useResults()

  const filterResultByPrice = (price) => results.filter(result => result.price === price)

  return (
    <>
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <SearchBar
          onTermSubmit={() => searchApi(term)}
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
        />
        <Text style={{alignSelf: 'center'}}> We have found {results.length} results</Text>
        {errorMessage && <Text>{errorMessage}</Text>}
        <ResultsList results={filterResultByPrice('₺')} title={'Cost Effective'}/>
        <ResultsList results={filterResultByPrice('₺₺')} title={'Bit Pricer'}/>
        <ResultsList results={filterResultByPrice('₺₺₺')} title={'Big Spender'}/>
      </ScrollView>
    </>
  )
}