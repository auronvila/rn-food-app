import {FlatList, Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import yelp from '../api/yelp';
import {useEffect, useState} from 'react';
import {styles} from '../styles/styles';

export default function ResultShowScreen(props) {
  const [result, setResult] = useState(null);
  const id = props.navigation.getParam('id')

  useEffect(() => {
    getResult(id).then(item => setResult(item))
  }, [])

  async function getResult(id) {
    const response = await yelp.get(`/${id}`)
    return response.data
  }

  function handleMoreInfo() {
    Linking.openURL(result.url);
  }

  if (!result) {
    return null
  }
  return (
    <View>
      <Text style={styles.detailTitleStyle}>{result.name}</Text>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={result.photos} keyExtractor={photo => photo}
                renderItem={({item}) => <Image style={styles.detailImageStyle} source={{uri: item}}/>}/>
      <Text style={styles.locationText}>Location 📍</Text>
      <Text style={styles.locationDetailText}>{result.location.address1} / <Text style={{
        fontSize: 17,
        marginLeft: 15,
        fontWeight: 'bold'
      }}>{result.location.address2}</Text> </Text>
      <Text style={styles.locationText}>Contact  ☎️</Text>
      <Text style={{
        fontSize: 17,
        marginLeft: 15,
        fontWeight: 'bold'
      }}>{result.display_phone}</Text>
      <Text style={styles.moreInformationText}>More Information</Text>
      <TouchableOpacity onPress={handleMoreInfo}>
        <Text style={{marginLeft: 15, color: 'blue', fontSize:17, textDecorationLine: 'underline'}}>
          CLICK HERE
        </Text>
      </TouchableOpacity>
      <Text style={{
        position: 'absolute',
        bottom: -200,
        left: 0,
        right: 0,
        textAlign: 'center',
        marginTop: 10,
      }}>
        Made with ♥️ by Auron Vila
      </Text>
    </View>
  )
}