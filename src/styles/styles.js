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
    marginLeft: 15,
    marginBottom: 5,
  },
  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 5,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  container: {
    marginLeft: 15,
  },
  detailImageStyle: {
    width: 200,
    height: 200,
    margin:10,
    borderRadius: 5,
    alignSelf: 'center',
    flexShrink:1
  },
  detailTitleStyle: {
    alignSelf:'center',
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 20,
    marginTop:15
  },
  locationText: {
    fontSize: 25,
    marginLeft: 15,
    marginTop:15
  },
  locationDetailText: {
    fontSize: 17,
    marginLeft: 15,
  },
  moreInformationText: {
    fontSize: 25,
    marginLeft: 15,
    marginTop: 20,
  },
});
