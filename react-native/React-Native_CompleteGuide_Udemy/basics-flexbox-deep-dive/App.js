import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      margin:50,padding: 50, flexDirection:'row', 
      width: '80%', height:300, justifyContent: 'space-around', alignItems: 'stretch', 
      borderWidth:1, borderColor:'black'
    }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex:2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}