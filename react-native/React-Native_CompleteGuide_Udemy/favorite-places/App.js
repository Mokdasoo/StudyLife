import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Colors} from './constants/colors';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import Map from './screens/Map';
import IconButton from './components/UI/IconButton';
import { useEffect, useState } from 'react';
import { init } from './util/database';
import * as SplashScreen from 'expo-splash-screen';
import PlaceDetails from './screens/PlaceDetails';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {

  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if(dbInitialized){
      const appIsReady = async () => {
        await SplashScreen.hideAsync();
      }
      appIsReady();
    }
  }, [dbInitialized]);

  if(!dbInitialized){
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700}
        }}>
          <Stack.Screen 
            name='AllPlaces' 
            component={AllPlaces} 
            options={({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) => 
                <IconButton 
                  icon='add' 
                  size={24} 
                  color={tintColor} 
                  onPress={()=> navigation.navigate('AddPlace')} 
                /> 
            })}
          />
          <Stack.Screen 
            name='AddPlace' 
            component={AddPlace} 
            options={{
              title: 'Add a New Place'
            }}
          />
          <Stack.Screen name='Map' component={Map} />
          <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{
            title: 'Loading Place...'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
