import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchInputBackground: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    borderRadius: 7,
    marginHorizontal: 15,
    height: 40,
    margin: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 11,
  },
  titleStyle: {
    fontSize: 30,
    margin: 15
  },
  imageStyle:{
    width:250,
    height:250,
    borderRadius:5,
    margin:10,
    restaurantName:{
      fontWeight:'bold',
      fontSize:17,
    }
  }
})