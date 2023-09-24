import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/Screens/SearchScreen';
import ResultShowScreen from './src/Screens/ResultShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food-App',
    },
  }
);

export default createAppContainer(navigator);
