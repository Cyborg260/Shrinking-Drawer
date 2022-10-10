import { View, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import BackLayout from './src/screens/BackLayout';
import FrontLayout from './src/screens/FrontLayout';

const App = () => {


  return (
    <View style={{
      flex: 1,
      flexShrink: 0,
      backgroundColor: "#fff"
    }}>
      <StatusBar
        backgroundColor="grey"
      />
     <BackLayout/>
     <FrontLayout/>
    </View>
  )
}

export default App;