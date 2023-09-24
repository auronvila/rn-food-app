import {Image, Text, View} from 'react-native';
import {styles} from '../styles/styles';

export default function ResultsDetail(props){
  return(
    <View>
      <Image style={styles.imageStyle} source={{ uri: props.result.image_url}}/>
      <Text style={styles.imageStyle.restaurantName}>{props.result.name}</Text>
      <Text>{props.result.rating} Starts, {props.result.review_count} Revievs</Text>
    </View>
  )
}