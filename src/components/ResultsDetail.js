import {Image, Text, View} from 'react-native';
import {styles} from '../styles/styles';

export default function ResultsDetail(props){
  return(
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: props.result.image_url}}/>
      <Text style={styles.restaurantName}>{props.result.name}</Text>
      <Text style={{marginBottom:10}}>{props.result.rating} Starts, {props.result.review_count} Revievs</Text>
    </View>
  )
}