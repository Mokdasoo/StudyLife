import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Alert, Platform, View } from 'react-native';
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
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});


const DrawerNavigator = () => {
  const scheduleNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification',
        data: {userName: 'Lee'}
      },
      trigger: {
        seconds: 5
      }
    });
  }

  const sendPushNotificationHandler = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[WVcmthBtrnNdSKRoTEdtHi]',
        title: 'Test - sent from a device!',
        body: 'This is a test!'
      })
    })
  }


  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ffbf00' },
        headerTintColor: 'black',
        sceneContainerStyle: { backgroundColor: '#3f2f25'},
        drawerContentStyle: { backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351301',
        drawerActiveBackgroundColor: '#b49481',
        headerRight: () => (
          <View>
            <Button title='Push 알림' onPress={sendPushNotificationHandler}/>
            <Button title='알림 예약' onPress={scheduleNotificationHandler}/>
          </View>
        )
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
  useEffect(() => {
    const configurePushNotification = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if(finalStatus !== 'granted'){
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if(finalStatus !== 'granted'){
        Alert.alert(
          'Permission required',
          'Push notifications need the appropriate permissions.'
        );
        return;
      }
      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);

      if(Platform.OS === 'android'){
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT
        });
      }


    }
    configurePushNotification();
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log('NOTIFICATION RECEIVED');
      console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log(userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('NOTIFICATION RESPONSE RECEIVED');
      console.log(response);
      const userName = response.notification.request.content.data.userName;
      console.log(userName);
    });

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

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
