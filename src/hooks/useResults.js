import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    searchApi('pasta')
  }, []);

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'istanbul'
        }
      })
      setResults(response.data.businesses)
    } catch (e) {
      setErrorMessage('something went wrong please try again')
    }
  }

  return[searchApi,errorMessage,results]
}