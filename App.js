import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/Screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food-App',
    },
  }
);

export default createAppContainer(navigator);
