import React, {useState} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';

export default function App() {
  const value = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={moveBall}>
          <Animated.View
            style={[
              {
                backgroundColor: 'red',
                width: 100,
                height: 100,
                borderRadius: 50,
                opacity: value,
              },
            ]}></Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
