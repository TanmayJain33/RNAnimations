import React, {useState} from 'react';
import {View, TouchableOpacity, Animated, Text} from 'react-native';

export default function App() {
  const opacity = useState(new Animated.Value(0))[0];

  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              backgroundColor: 'red',
              width: 100,
              height: 100,
              borderRadius: 50,
              opacity: opacity,
            },
          ]}></Animated.View>
        <TouchableOpacity onPress={fadeInBall}>
          <Text>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOutBall}>
          <Text>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
