import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
// import FavoriteContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ffbf00' },
        headerTintColor: 'black',
        sceneContainerStyle: { backgroundColor: '#3f2f25'},
        drawerContentStyle: { backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351301',
        drawerActiveBackgroundColor: '#b49481'
      }}
    >
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }} 
      />
      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen} 
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#ffbf00' },
              headerTintColor: 'black',
              contentStyle: { backgroundColor: '#3f2f25'}
            }}
          >
            <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigator} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverviewScreen} 
              // options={({route, navigation})=> {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}  
            />
            <Stack.Screen 
              name='MealDetail' 
              component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});